import Question from '../data/questions';
import IQuestion from '@interfaces/IQuestions';

// type Filter = {
//   _id: {id: string}
// }

class QuestionService {
  static async create(body: IQuestion) {
    try {
      const {
        text
      } = body
      const data = await Question.create({text});
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }

  static async update(questionId: string, body: IQuestion) {
    try {
      console.log(questionId)
      const data = await Question.findOneAndUpdate({_id: questionId}, body);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async disable(body: IQuestion) {
    try {
      const {
        id
      } = body
      const data = await Question.updateOne({id}, {isActive: false});
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getOneQuestion(body: IQuestion) {
    try {
      const {
        id
      } = body
      const data = await Question.findOne({id});
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getAllQuestions() {
    try {
      const data = await Question.find({}).sort({updatedAt: -1});
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default QuestionService;