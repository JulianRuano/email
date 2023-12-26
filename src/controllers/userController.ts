import { UserModel } from '../models/userModel';

export class userController {
    static async getAllUsers(_req: any, res: any) {
        const users = await UserModel.findAll();
        res.status(200).json(users);
    }

    static async createUser(req: any, res: any) {
        await UserModel.sync();
        const { name, email, password } = req.body;
        const user = await UserModel.create({ name, email, password });
        res.status(201).json(user);
    }



   
}