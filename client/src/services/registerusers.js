import * as baseService from './base';

function all() {
    return baseService.get('/api/registerusers');
}

function one(id) {
    return baseService.get(`/api/registerusers/${id}`)
}

function insert(data) {
<<<<<<< HEAD
    return baseService.post('/api/users/addNew', data);
=======
    return baseService.post('/api/users/addnew', data);
>>>>>>> 7970589f3413f24a1454df5bd5edfb897ff76409
    console.log(data);
}

function update(id, data) {
    return baseService.put(`/api/registerusers/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/registerusers/${id}`);
}

export { all, one, insert, update, destroy }