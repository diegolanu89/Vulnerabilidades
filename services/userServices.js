class UserService {
    constructor(persistencia) {
      this.model = persistencia;
    }
  
    async login(username, password) {
      return await this.model.findByCredentials(username, password);
    }
  
    async getById(id) {
      return await this.model.findById(id);
    }
  
    async comentar(userId, comentario) {
      await this.model.addComment(userId, comentario);
    }
  
    async cambiarEmail(userId, nuevoEmail) {
      await this.model.updateEmail(userId, nuevoEmail);
    }
  
    async registrarUsuario({ username, password, email }) {
      return await this.model.createUser({ username, password, email });
    }
  }
  
  export default UserService;
  