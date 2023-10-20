import api from './api';
import { Component } from 'react';
// import messageService from './MessageService.js'

export class QuestionService extends Component {
    async create(request) {
        console.log('CHEUGUEI ASDASD')
        console.log(request)
        console.log(request['question'])
        const params = {
            question: request['question'],
            responses: request['responses']
        }
        console.log(params)
        // const {
        //     question: question,
        //     response: responses
        // } = request;
        // console.log('PARAM')
        // console.log({params})
        return await api.post(`/api/question/`, params)
            .then((response) => {
                // messageService.successMessage('Questão cadastrada com sucesso')
                console.log("DEU TD CERTO, CADASTREI")
            })
            .catch((err) => {
                // messageService.errorMessage('Erro ao cadastrar Questão')
                console.log("Ops! ocorreu um erro" + err);
            });
    }


    async listarQuestoes() {
        return await api.get('api/questao')
            .then((response) => {
                console.log({ response })
                return response.data;
            })
            .catch((err) => {
                console.log("Ops! ocorreu um erro" + err);
            });
    }

    async editarPergunta(id, tipo, descricao, eixoId) {
        const params = {
            id: id,
            tipo: tipo,
            descricao: descricao,
            eixoId: eixoId,
        }
        console.log({ params })
        return await api.put(`/api/questao`, params)
            .then((response) => {
                messageService.successMessage('Questão cadastrada com sucesso')
                return response.data;
            })
            .catch((err) => {
                messageService.errorMessage('Erro ao editar Questão')
                console.log("Ops! ocorreu um erro" + err);
            });
    }

    async excluirQuestao(id) {
        return await api.delete(`/api/questao/${id}`)
            .then((response) => {
                messageService.successMessage(response.data.mensagem)
                return response.data;
            })
            .catch((err) => {
                messageService.errorMessage('Erro ao excluir Questão')
                console.log("Ops! ocorreu um erro" + err);
            });
    }

}

const questoesService = new QuestionService();
export default questoesService;
