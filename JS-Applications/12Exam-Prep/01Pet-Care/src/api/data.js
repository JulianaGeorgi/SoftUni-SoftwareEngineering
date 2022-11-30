// responsible for the collection of data (pets)

import { del, get, post, put } from './api.js';

export async function getAllPets(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id){
    return get('/data/pets/' + id);
}

export async function deleteById(id){
    return del('/data/pets/' + id);
}

export async function createPet(petData){
    return post('/data/pets', petData);
}

export async function editPet(id, petData){
    return put('/data/pets/' + id, petData);
}