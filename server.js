import express from "express";
import RouterUsers from "./routes/userRoutes.js";
import ConexionMongo from "./db/conexion.js";
import session from 'express-session';
class Server {
  #port;
  #persistencia;

  constructor(port, persistencia) {
    this.#port = port;
    this.#persistencia = persistencia;
  }

  async start() {
    // -----------------------------------------------
    //             APLICACIÓN EXPRESS
    // -----------------------------------------------
    const app = express();

    // -----------------------------------------------
    //     CONEXIÓN A BASE DE DATOS (si aplica)
    // -----------------------------------------------
    if (this.#persistencia === "DB") {
      await ConexionMongo.conectar();
    }

    // -----------------------------------------------
    //            MIDDLEWARES EXPRESS
    // -----------------------------------------------
    app.use(express.urlencoded({ extended: true }));
    app.use(session({ secret: "secreto", resave: false, saveUninitialized: true }));
    app.set("view engine", "ejs");
    app.set("views", "./views"); // ruta correcta a tus .ejs
    app.use(express.static("public"));
    app.use(express.json());

    // -----------------------------------------------
    //           API RESTful:  Usuarios
    // -----------------------------------------------
    app.use("/", new RouterUsers(this.#persistencia).start());

    // -----------------------------------------------
    //        LISTEN DEL SERVIDOR EXPRESS
    // -----------------------------------------------
    const PORT = this.#port;
    const server = app.listen(PORT, () =>
      console.log(`✅ Servidor escuchando en http://localhost:${PORT}`)
    );
    server.on("error", (error) =>
      console.log(`❌ Error en servidor: ${error.message}`)
    );
  }
}

export default Server;
