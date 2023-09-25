import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3100;
const uri = "mongodb+srv://bpk_game_quimica_db:OF2KIR6qR9rEZm1y@cluster0.hby2zak.mongodb.net/?retryWrites=true&w=majority";


// Configuração de rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const connectBD = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o MongoDB estabelecida.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  connectBD();
});