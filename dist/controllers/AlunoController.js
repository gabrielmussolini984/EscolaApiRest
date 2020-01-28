"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['url', 'filename'],
      },
    });
    res.json({ alunos });
  }

  // CREATE
  async create(req, res) {
    try {
      const novoAluno = await _Aluno2.default.create(req.body);
      return res.json(novoAluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // SHOW
  async show(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Faltando ID'] });
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Faltando ID'] });
      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Faltando ID'] });
      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });
      const alunoModificado = await aluno.update(req.body);
      return res.json(alunoModificado);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

exports. default = new AlunoController();
