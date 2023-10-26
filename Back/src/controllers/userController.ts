import { Request, Response } from 'express';
import userService from '../services/userService'

class UserController {
  async create(req: Request, res: Response){
    try {
      const user = await userService.create(req.body);
      res.status(200).json({msg: 'Usuário cadastrado com Sucesso', data: user});
    } catch (error) {
      res.status(400).json({error});
    }
  }

  async login(req: Request, res: Response){
    try {
      const data = await userService.login(req.body);
			if (data)
      	res.status(200).json({msg: data.message, token: data.token});
    } catch (error) {
      res.status(400).json({error});
    }
  }
}

export default new UserController();