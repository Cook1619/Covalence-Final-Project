import * as baseService from './base';

function all() {
    return baseService.get('/api/sports');
}

function one(id) {
    return baseService.get(`/api/sports/${id}`)
}



export { all, one }