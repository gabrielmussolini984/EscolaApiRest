import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json({ alunos });
  }

  // UPDATE
  async update(req, res) {
    try {
      console.log(req.body);
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.json({ errors: ['Aluno não existe'] });
      const alunoModificado = await aluno.update(req.body);
      return res.json(alunoModificado);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

export default new AlunoController();
