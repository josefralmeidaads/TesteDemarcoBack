const User = require('../models/User');

module.exports = {
  async create(request, response){
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if(!user){
      return response.status(400).json({ Error: "Este email não está cadastrado!" })
    }

    if(password !== user.password){
      return response.status(400).json({ Error: 'A senha digita não confere com a senha do usuário' });
    }

    return response.json(user);
  },

  async show(request, response){
   
  }
}