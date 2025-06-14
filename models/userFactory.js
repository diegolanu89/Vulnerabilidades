import UserMem from './userMem.js';
import UserFile from './userFile.js';
import UserDb from './userDb.js';

class UserFactory {
  static get(tipo) {
    switch (tipo) {
      case 'MEM':
        console.log('>>> Persistiendo en memoria');
        return new UserMem();
      case 'FILE':
        console.log('>>> Persistiendo en archivo');
        return new UserFile();
      case 'DB':
        console.log('>>> Persistiendo en base de datos');
        return new UserDb();
      default:
        console.log('>>> Persistencia por defecto: memoria');
        return new UserMem();
    }
  }
}

export default UserFactory;
