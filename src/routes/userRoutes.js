import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.create);

export default router;

/*
  index -> lista todos usuarios
  store/create -> cria um novo usuario
  delete -> apaga um usuario
  show -> lista um usuario
  update -> atualiza um usuario
*/
