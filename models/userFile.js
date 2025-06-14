import fs from 'fs/promises';

const FILE_PATH = './usuariosData.json';

class UserFile {
  async #leer() {
    try {
      const contenido = await fs.readFile(FILE_PATH, 'utf-8');
      return JSON.parse(contenido);
    } catch {
      return [];
    }
  }

  async #escribir(data) {
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
  }

  async findByCredentials(username, password) {
    const data = await this.#leer();
    return data.find(u => u.username === username && u.password === password);
  }

  async findById(id) {
    const data = await this.#leer();
    return data.find(u => u.id === id);
  }

  async addComment(id, comment) {
    const data = await this.#leer();
    const index = data.findIndex(u => u.id === id);
    if (index !== -1) {
      data[index].comentarios.push(comment);
      await this.#escribir(data);
    }
  }

  async updateEmail(id, email) {
    const data = await this.#leer();
    const index = data.findIndex(u => u.id === id);
    if (index !== -1) {
      data[index].email = email;
      await this.#escribir(data);
    }
  }

  async createUser(userData) {
    const data = await this.#leer();
    const newUser = { ...userData, id: Date.now().toString(), comentarios: [] };
    data.push(newUser);
    await this.#escribir(data);
    return newUser;
  }
}

export default UserFile;
