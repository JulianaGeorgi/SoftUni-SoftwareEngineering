import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/jsonstore/blogPosts';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogPosts = Object.values(result);

    return blogPosts;
};

export const getOne = async (blogPostId) => {
    const result = await request.get(`${baseUrl}/${blogPostId}`);

    return result;
};

export const create = async (blogData) => {
    const result = await request.post(baseUrl, blogData);

    console.log(result);

    return result;
};

export const addComment = async (blogPostId, data) => {
    const result = await request.post(`${baseUrl}/${blogPostId}/comments`, data);

    return result;
};
