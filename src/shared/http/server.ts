// A primeira coisa que precisa ser importada é:
import 'reflect-metadata';
// Importamos as duas bibliotecas com quem iremos trabalhar:
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

// Importamos as rotas:
import routes from './routes';
import AppError from '@shared/errors/AppError';

// A conexão do createConnection será feita com a importação abaixo
import '@shared/typeorm';

const app = express();

app.use(cors());

// Para definir que nosso projeto irá trabalhar com o padrão json precisamos colocar isso de forma explicita, caso contrário o aplicativo NÃO irá entender:
app.use(express.json());

app.use(routes);
// obs.: geralmente é nesse ponto que os erros costumam acontecer

// Middleware para tratamento de erros e exceções tem 4 parâmetros:
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // Verificamos se o erro é uma instância da class AppError
    // obs.: todo erro gerado pela aplicação irá cair aqui
    if (error instanceof AppError) {
      // Vamos pegar a estado do erro e montar uma mensagem estruturada
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    // Quando o erro for desconhecido, não se aplicando no caso da AppError
    // obs.: todo erro gerado pelo servidor cairá aqui
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

// Método que irá chamar nosso servidor
// Configurado na porta 3333
app.listen(3333, () => {
  console.log('Server starter on port 3333!');
});
