import axios from 'axios';


const API = axios.create({baseURL:'http://localhost:5050'});


API.interceptors.request.user((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchPosts = () => API.get('/posts');

export const createPost =(newPost) =>API.post('/posts', newPost);

export const updatePost = (id, updatePost)=>API.patch(`/posts/${id}`, updatePost)

export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);


export const signIn = (formData) => API.post('/users/signin',formData);

export const signUp = (formData) => API.post('/users/signup',formData);