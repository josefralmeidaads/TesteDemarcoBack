const User = require('../models/User');

module.exports = {
  async show(request, response){
    const users = await User.find();
    return response.json(users);
  },

  async create(request, response){
    const { name, email, password, type } = request.body;

    let user = await User.findOne({ email });

    if(!user){
      if(!name || !password || !type ||!email){
        return response.status(400).json({ Error: 'Nome ou Senha estão em branco, favor preencher'})
      }
      const user = await User.create({ name, email, password, type });
      return response.json(user);
    } else {
      return response.status(400).json({ Error: 'Já existe usuário cadastrado com esse email' });
    }
  },

  async delete(request, response){
    const { id } = request.params;
    await User.findOneAndRemove({ _id: id });

    return response.json({ message:'Usuário Deletado Com Sucesso!' });
  }
}