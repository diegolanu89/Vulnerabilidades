import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  comentarios: [String]
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

class UserDb {
  async findByCredentials(username, password) {
    return await Usuario.findOne({ username, password });
  }

  async findById(id) {
    return await Usuario.findById(id);
  }

  async addComment(id, comment) {
    const user = await Usuario.findById(id);
    if (user) {
      user.comentarios.push(comment);
      await user.save();
    }
  }

  async updateEmail(id, email) {
    await Usuario.findByIdAndUpdate(id, { email });
  }

  async createUser(userData) {
    const nuevoUsuario = new Usuario({ ...userData, comentarios: [] });
    await nuevoUsuario.save();
    return nuevoUsuario;
  }
}

export default UserDb;
