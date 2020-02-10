"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();


// Em um sistema real, não daria para listar todos cadastros,
// e ver o perfil(algumas aplicações pode ser que seja viavel)

// router.get('/', userController.index); // Lista Usuarios
// router.get('/:id', userController.show); // Lista Usuario

router.post('/', _UserController2.default.create);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.remove);

exports. default = router;

/*
  index -> lista todos usuarios
  store/create -> cria um novo usuario
  delete -> apaga um usuario
  show -> lista um usuario
  update -> atualiza um usuario
*/
