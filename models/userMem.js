class UserMem {
    constructor() {
      this.usuarios = [];
    }
  
    async findByCredentials(username, password) {
      return this.usuarios.find(u => u.username === username && u.password === password);
    }
  
    async findById(id) {
      return this.usuarios.find(u => u.id === id);
    }
  
    async addComment(id, comment) {
      const user = await this.findById(id);
      if (user) user.comentarios.push(comment);
    }
  
    async updateEmail(id, email) {
      const user = await this.findById(id);
      if (user) user.email = email;
    }
  
    async createUser(userData) {
      const id = Date.now().toString();
      const newUser = { ...userData, id, comentarios: [] };
      this.usuarios.push(newUser);
      return newUser;
    }
  }
  
  export default UserMem;
  