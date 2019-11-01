import { Router } from 'express';
import User from './app/models/User';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.get('/', (req, res) => {
  return res.json({ msg: 'Chegou' });
});

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'Marcos Souza',
    email: 'bytecore@gmail.com',
    password_hash: '123',
  });
  return res.json(user);
});

export default routes;
