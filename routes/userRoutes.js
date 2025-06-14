import express from 'express';
import UserFactory from '../models/userFactory.js';
import UserController from '../controller/userController.js';

class RouterUser {
  constructor(persistencia) {
    this.controller = new UserController(UserFactory.get(persistencia));
    this.router = express.Router();
  }

  start() {
    this.router.get('/', this.controller.renderLogin);
    this.router.post('/login', this.controller.login);
    this.router.get('/productos', this.controller.verProductos);
    this.router.post('/comentario', this.controller.comentar);
    this.router.get('/cambiar-email', this.controller.formCambiarEmail);
    this.router.post('/cambiar-email', this.controller.cambiarEmail);
    this.router.get('/registro-demo', this.controller.registroDemo);
    return this.router;
  }
}

export default RouterUser;
