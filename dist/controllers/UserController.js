"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // CREATE
  async create(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const usuarios = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(usuarios);
    } catch (error) {
      console.log('erro');
      return res.json(null);
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const usuario = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const usuario = await _User2.default.findByPk(req.userId);
      if (!usuario) return res.json({ errors: ['Usuario não existe'] });
      const usuarioModificado = await usuario.update(req.body);
      const { id, nome, email } = usuarioModificado;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // REMOVE
  async remove(req, res) {
    try {
      const usuario = await _User2.default.findByPk(req.userId);

      if (!usuario) return res.json({ errors: ['Usuario não existe'] });
      await usuario.destroy(req.params.id);

      return res.json(usuario);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
