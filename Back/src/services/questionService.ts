import Questions from '../data/questions';
import Answers from '../data/answers';
import IQuestion from '@interfaces/IQuestions';
import IAnswer from '@interfaces/IAnswers';


class QuestionService {
  static async create(body: IQuestion) {
    try {
      const { question, responses } = body;
      if (!question || !responses) throw new Error("Dados de entrada inválidos");

      const questionData = await Questions.create({ text: question });
      if (!questionData) throw new Error("Falha ao criar a pergunta");

      if (responses && responses.length > 0) {
        const responseObjects = responses.map((response: any) => ({
          description: response.text,
          isCorrectAnswer: response.isCorrectAnswer,
          question: questionData._id,
        }));

        const savedResponses = await Answers.create(responseObjects);

        if (!savedResponses) throw new Error("Falha ao salvar as respostas");
      }

      return { message: 'Pergunta e respostas criadas com sucesso' };
    } catch (error: any) {
      return { error: error.message };
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

  static async getOneQuestion(questionId: String) {
    try {
      // const {
      //   id
      // } = body
      console.log({questionId});
      const question = await Questions.findOne({_id: questionId});
      console.log({question});
      const answer = await Answers.find({question: question?._id});
      console.log({answer});
      const data = {
        question,
        answer
      }
      console.log({data});
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getAllQuestions() {
    try {
      const questionsWithAnswers = await Answers.aggregate([
        {
          $lookup: {
            from: "questions", // Use the actual name of the "Questions" collection
            localField: "question",
            foreignField: "_id",
            as: "questionDetails"
          }
        },
        {
          $unwind: "$questionDetails"
        },
        {
          $group: {
            _id: "$questionDetails._id",
            question: { $first: "$questionDetails" },
            answers: { $push: "$$ROOT" }
          }
        }
      ]);

      return questionsWithAnswers;
    } catch (error) {
      return error;
    }
  }
}

export default QuestionService;