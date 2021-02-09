import express from 'express';
import { getPosts, createPost } from '../Controllers/postsContollers.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);

export default router;