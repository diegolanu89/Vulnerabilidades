import UserService from '../services/userServices.js';

class UserController {
  constructor(persistencia) {
    this.service = new UserService(persistencia);

    this.renderLogin = this.renderLogin.bind(this);
    this.login = this.login.bind(this);
    this.verProductos = this.verProductos.bind(this);
    this.comentar = this.comentar.bind(this);
    this.formCambiarEmail = this.formCambiarEmail.bind(this);
    this.cambiarEmail = this.cambiarEmail.bind(this);
    this.registroDemo = this.registroDemo.bind(this); // opcional
  }

  async renderLogin(req, res) {
    res.render('login');
  }

  async login(req, res) {
    const { username, password } = req.body;
    const user = await this.service.login(username, password);
    if (user) {
      req.session.userId = user.id || user._id;
      res.redirect('/productos');
    } else {
      res.send('Credenciales inválidas');
    }
  }

  async verProductos(req, res) {
    const user = await this.service.getById(req.session.userId);
    res.render('productos', {
      comentarios: user?.comentarios || [],
      csrfToken: req.session.csrfToken
    });
  }

  async comentar(req, res) {
    const { comentario } = req.body;
    await this.service.comentar(req.session.userId, comentario);
    res.redirect('/productos');
  }

  async formCambiarEmail(req, res) {
    req.session.csrfToken = crypto.randomBytes(24).toString('hex');
    res.render('cambiar-email', { csrfToken: req.session.csrfToken });
  }

  async cambiarEmail(req, res) {
    const { email, _csrf } = req.body;
    if (_csrf !== req.session.csrfToken) {
      return res.status(403).send('CSRF detectado');
    }
    await this.service.cambiarEmail(req.session.userId, email);
    res.send('Email actualizado correctamente');
  }

  async registroDemo(req, res) {
    const user = await this.service.registrarUsuario({
      username: 'demo',
      password: 'demo123',
      email: 'demo@mail.com'
    });
    res.json(user);
  }
}


export default UserController;
