import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


// Em um sistema real, não daria para listar todos cadastros,
// e ver o perfil(algumas aplicações pode ser que seja viavel)

router.get('/', loginRequired, userController.index); // Lista Usuarios
router.get('/:id', userController.show); // Lista Usuario

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.remove);

export default router;

/*
  index -> lista todos usuarios
  store/create -> cria um novo usuario
  delete -> apaga um usuario
  show -> lista um usuario
  update -> atualiza um usuario
*/
