// responsible for the collection of data (pets)

import { get } from './api.js';

export async function getAllPets(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}