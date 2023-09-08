import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

// populate the variable in dotenv
dotenv.config();

// create an instance of router
const router = express.Router();

export default router;