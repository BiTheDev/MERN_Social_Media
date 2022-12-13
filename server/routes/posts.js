import express from 'express';


import { getPosts,getPost,getPostsBySearch,createPost, updatePost, deletePost, likePost,commentPost } from '../controllers/postsController.js';
import auth from '../middleware/auth.js';
const router = express.Router();


router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id',getPost);
router.post('/',auth, createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost', auth, likePost)
router.post('/:id/commentPost', commentPost);

export default router;