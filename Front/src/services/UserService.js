import api from './api';
import { Component } from 'react';
// import messageService from './MessageService.js'

export class QuestionService extends Component {
	async login(email, password) {
		console.log('CHEUGUEI ASDASD');
		console.log(email);
		console.log(password);
		const params = {
			email: email,
			password: password
		};
		return await api.post(`/api/login/`, params)
		.then((response) => {
				// messageService.successMessage('Questão cadastrada com sucesso')
				console.log("DEU TD CERTO, CADASTREI")
			})
			.catch((err) => {
				// messageService.errorMessage('Erro ao cadastrar Questão')
				console.log("Ops! ocorreu um erro" + err);
			});
	}

	async create(email, password) {
		console.log({email});
		console.log({password});
		const params = {
			email: email,
			password: password
		};
		return await api.post(`/api/create/`, params)
		.then((response) => {
				// messageService.successMessage('Questão cadastrada com sucesso')
				console.log("DEU TD CERTO, CADASTREI")
			})
			.catch((err) => {
				// messageService.errorMessage('Erro ao cadastrar Questão')
				console.log("Ops! ocorreu um erro" + err);
			});
	}
}

const questoesService = new QuestionService();
export default questoesService;
