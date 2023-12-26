import { Router } from 'express'
import { userController } from '../controllers/userController';

export const userRoute = Router();

userRoute.get('/user', userController.getAllUsers);
userRoute.post('/user', userController.createUser);