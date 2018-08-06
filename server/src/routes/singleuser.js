import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from "../table";


let router = Router();

let singleUser = new Table('users');

//Originally received undefined 'me' in where clause 
router.get('/:id', async (req, res) => {
    try {
        let myAccount = await singleUser.getUser(req.params.id);
        res.json(myAccount);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;


// router.get("/:id", async (req, res) => {
//     try {
//       let founduser = await userTable.getOne(req.params.id);
//       let groupsUsersSql = `select g.* from groups g join groups_users gu on g.id = gu.group_id join users u on u.id = gu.user_id where u.id = ${founduser.id}`;
//       let groupsUsers = await userTable.select(groupsUsersSql);
//       founduser["groups"] = groupsUsers;
//       let eventsUsersSql = `select e.* from events e join events_users eu on e.id = eu.event_id join users u on u.id = eu.user_id where u.id = ${founduser.id}`;
//       let eventsUsers = await userTable.select(eventsUsersSql);
//       founduser["events"] = eventsUsers;
//       res.json(founduser);
//     } catch (err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//   });
