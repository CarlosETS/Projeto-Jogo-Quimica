import { Request, Response } from 'express';
import questionService from '../services/questionService'

class QuestionController {
  async create(req: Request, res: Response) {
    try {
      const data = await questionService.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  //Controler só para criar multiplas questões
  async createMany(req: Request, res: Response) {
    try {
      console.log("aiaiai")
      const data = req.body.data; // Acessando a chave "data" do JSON

      if (!data || !Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ error: 'Dados de entrada inválidos' });
      }
  
      for (const item of data) {
        const { question, answers } = item;
        await questionService.createMany(question, answers);
      }
  
      res.status(200).json({ msg: 'Perguntas cadastradas com sucesso' });
    } catch (error) {
      console.log("aiaiia2", error)
      res.status(400).json({ error });
    }
  }

  async disable(req: Request, res: Response) {
    try {
      await questionService.disable(req.body);
      res.status(200).json({});
    } catch (error) {
      console.log({ error })
      res.status(400).json({ error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      await questionService.update(req.params.id, req.body);
      res.status(200).json({});
    } catch (error) {
      console.log({ error })
      res.status(400).json({ error });
    }
  }
  async getOneQuestion(req: Request, res: Response) {
    try {
      const data = await questionService.getOneQuestion(req.params.id);
      res.status(200).json({ data });
    } catch (error) {
      console.log({ error })
      res.status(400).json({ error });
    }
  }

  async getAllQuestions(req: Request, res: Response) {
    try {
      const data = await questionService.getAllQuestions();
      res.status(200).json({ data });
    } catch (error) {
      console.log({ error })
      res.status(400).json({ error });
    }
  }
}

export default new QuestionController();