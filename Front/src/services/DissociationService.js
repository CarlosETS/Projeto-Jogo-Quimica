import api from './api';

class SaltFormationService {
  async createFormation(items) {
    try {
      const response = await api.post('/api/salt-formation', { items });
      console.log('Formação de sal criada com sucesso');
      return response.data;
    } catch (error) {
      console.error('Erro ao criar a formação de sal', error);
      throw error;
    }
  }

  async getFormation() {
    try {
      const response = await api.get('/api/salt-formation');
      console.log('Obtendo formação de sal');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a formação de sal', error);
      throw error;
    }
  }
}

const saltFormationService = new SaltFormationService();
export default saltFormationService;
