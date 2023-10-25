import express from 'express';
import mongoose from 'mongoose';
import questionRoute from './routes/questionRoute';
import cors from 'cors';

// Config Inicial
const app = express();
const PORT = 3100;
const uri = "mongodb+srv://bpk_game_quimica_db:OF2KIR6qR9rEZm1y@cluster0.hby2zak.mongodb.net/?retryWrites=true&w=majority";


// Configuração de rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  connectBD();
});


//Middleware
app.use(cors())
app.use(express.json());


// Routes
app.use("/api/question", questionRoute)

const connectBD = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Conexão com o MongoDB estabelecida.');
  } catch (error: any) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

