import express from 'express';
import { getPosts, createPost, editPost, deletePost, likePost } from '../Controllers/postsContollers.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);
router.get('/', updatePost);
router.get('/', deletePost);
router.get('/', likePost);

export default router;