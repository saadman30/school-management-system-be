import { Router } from 'express'
import { createUser, getAllsUser } from '../controllers/user.controller.js';

const router = Router();

router.get("/users", getAllsUser);
router.post("/user", createUser);

export default router;