// Precisamos importar o Router para poder trabalhar com as rotas
import { Router } from 'express';

const routes = Router();
// Vamos tratar as requests que chegarem
routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

export default routes;
