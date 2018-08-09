import { executeQuery, generatePlaceholders } from './config/db';

class Table {
    constructor(tableName) {
        if (!tableName) {
            throw new TypeError('You must pass a MySQL table name into the Table object constructor.');
        }
        this.tableName = tableName;
    }

    async getOne(id) {
        let sql = `SELECT * FROM ${this.tableName} WHERE id = ${id};`;
        let results = await executeQuery(sql, [id]);
        return results[0];
    }

    getAll() {
        let sql = `SELECT * FROM ${this.tableName}`;
        return executeQuery(sql);
    }

    getLogos() {
        let sql = `SELECT home.logos as homeTeam, away.logos as awayTeam, futuregames.id
                    FROM futuregames 
                    INNER JOIN teams home ON home.id = futuregames.homeTeam_ID 
        INNER JOIN teams away ON away.id = futuregames.awayTeam_ID`;
        return executeQuery(sql)
    }

    lastInning() {
        let sql = `SELECT * FROM ${this.tableName} WHERE inningSummary_inning_number = 9 AND isUnplayed = ${0} `;
        return executeQuery(sql);
    }

    // 0 = false and 1 = true
    futureGame() {
        let sql = `SELECT * FROM ${this.tableName} WHERE isUnplayed = ${1}`;
        return executeQuery(sql);
    }

    hasWon() {
        let sql = `SELECT * FROM ${this.tableName} WHERE hasWon = ${1}`;
        return executeQuery(sql);
    }

    async getUserBets(id) {
        let sql = `SELECT u.id , b.amount, t.name as teamName, b.gameid
                FROM users AS u
                INNER JOIN bets AS b ON b.userid =  u.id
                JOIN teams AS t ON b.teamid = t.id
                where u.id=${id}`;
        let results = await executeQuery(sql, [id]);
        return results;
    }

    find(query) {
        let columns = Object.keys(query);
        let values = Object.values(query);
        let conditions = columns.map((columnName) => {
            return `${columnName} LIKE ?`;
        });
        let sql = `SELECT * FROM ${this.tableName} WHERE ${conditions.join(' AND ')};`;
        return executeQuery(sql, values);
    }

    async insertScoreboard(row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let placeholderString = generatePlaceholders(values);
        let sql = `INSERT INTO ${this.tableName} (${columns.join(',')}) VALUES (${placeholderString});`;
        let results = await executeQuery(sql, values);
        return { id: results.insertId };
    }

    async insert(row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let placeholderString = generatePlaceholders(values);
        let sql = `INSERT INTO ${this.tableName} (${columns.join(',')}) VALUES (${placeholderString});`;
        let results = await executeQuery(sql, values);
        return { id: results.insertId };
    }

    async updateBetRandomly(id, randomNum) {
        let sql =
            `UPDATE bets
        SET is_winning_bet = ${randomNum}
        WHERE bets.id = ${id};`;
        executeQuery(sql, [id])
        return this.getOne(id);
    }

    update(id, row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let updates = columns.map((columnName) => {
            return `${columnName} = ?`;
        });
        let sql = `UPDATE ${this.tableName} SET ${updates.join(',')} WHERE id = ${id};`;
        return executeQuery(sql, values);
    }

    delete(id) {
        let sql = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
        return executeQuery(sql);
    }

    select(sql) {
        return executeQuery(sql);
    }
}


export default Table;