import * as baseService from './base';

function insert(data) {
    return baseService.post('/api/bet', data);
}

export { insert };