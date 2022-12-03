// responsible for the collection of data

import { del, get, post, put } from './api.js';

export async function getAllAlbums(){
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get('/data/albums/' + id);
}

export async function deleteById(id){
    return del('/data/albums/' + id);
}

export async function createAlbum(albumData){
    return post('/data/albums', albumData);
}

export async function editAlbum(id, albumData){
    return put('/data/albums/' + id, albumData);
}

// export async function likeAlbum(){
//     return post('/data/likes');
// }