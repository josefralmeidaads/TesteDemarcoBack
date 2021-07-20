const User = require('../models/User');
const Question = require('../models/Question');

module.exports = {
  async create(request, response){
    const { questions, name, question, propositions } = request.body;
    const { user_id } = request.headers;

    let user = User.findOne({ _id: user_id });

    if(!user){
      return response.status(400).json({ Error: 'Usuário informado não existe' })
    }

    const _question = await Question.create({ questions,name, question, propositions, user: user_id });

    return response.json(_question);
  },
  
  async show(request, response){
    const questions = await Question.find();
    return response.json(questions);
  },

  async delete(request, response){
    const { id } = request.params;

    await Question.findOneAndRemove({ _id: id });
    return response.json({ message: 'Prova Excluída com Sucesso' })
  },

  async listByIdTeacther(request, response){
    const { user_id } = request.headers;
    
    let user = await User.find({ _id: user_id });

    if(!user){
      return response.status(400).json({ Error: "Este usuário não existe" })
    }
    
    const questions = await Question.find({ user: user_id });

    return response.json(questions);
  },

  async listById(request, response){
    const { id } = request.params;

    if(!id){
      return response.status(400).json({ Error: "Id da avaliação está vazio"});
    }

    const question = await Question.findOne({ _id: id });

    return response.json(question);
  }
}