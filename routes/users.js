import express from "express";

import { createUser, getUser,deleteUser,getUserById,updateUserById} from '../controllers/users.js';
const router = express.Router();

router.get('/',getUser)

router.post('/',createUser)

router.get('/:id',getUserById);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUserById)

export default router;