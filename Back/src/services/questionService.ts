import Questions from '../data/questions';
import Answers from '../data/answers';
import IQuestion from '@interfaces/IQuestions';
import IAnswer from '@interfaces/IAnswers';

// type Filter = {
//   _id: {id: string}
// }

class QuestionService {
  static async create(body: IQuestion) {
    try {
      const {
        question,
        responses
      } = body
      console.log('PARAMETROS')
      console.log({body})
      const questionData = await Questions.create({question});
      console.log({questionData});
      const answerData = await Answers.create({...responses, question: questionData});
      console.log({answerData});

      const data = {
        questionData, answerData
      }
      return data;
    } catch (error) {
      return error;
    }
  }

  static async update(questionId: string, body: IQuestion) {
    try {
      console.log(questionId)
      const data = await Questions.findOneAndUpdate({_id: questionId}, body);
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
      const data = await Questions.updateOne({id}, {isActive: false});
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
      const data = await Questions.findOne({id});
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getAllQuestions() {
    try {
      const data = await Questions.find({}).sort({updatedAt: -1});
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default QuestionService;