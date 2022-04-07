// Importamos as duas bibliotecas com quem iremos trabalhar:
import express from 'express';
import cors from 'cors';

// Importamos as rotas:
import routes from './routes';

const app = express();

app.use(cors());

// Para definir que nosso projeto irá trabalhar com o padrão json precisamos colocar isso de forma explicita, caso contrário o aplicativo NÃO irá entender:
app.use(express.json());

app.use(routes);

// Método que irá chamar nosso servidor
// Configurado na porta 3333
app.listen(3333, () => {
  console.log('Server starter on port 3333!');
});
