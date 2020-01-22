import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Mussolini',
      email: 'gabrielmussolini@hotmail.com',
      idade: 21,
      peso: 61.50,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
