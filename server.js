import express from 'express'
import RouterUsers from './routes/userRoutes.js'
import ConexionMongo from './db/conexion.js'

class Server {
    #port
    #persistencia

    constructor(port, persistencia) {
        this.#port = port
        this.#persistencia = persistencia
    }

    async start() {
        // -----------------------------------------------
        //             APLICACIÓN EXPRESS
        // -----------------------------------------------
        const app = express()

        // -----------------------------------------------
        //     CONEXIÓN A BASE DE DATOS (si aplica)
        // -----------------------------------------------
        if (this.#persistencia === 'DB') {
            await ConexionMongo.conectar()
        }

        // -----------------------------------------------
        //            MIDDLEWARES EXPRESS
        // -----------------------------------------------
        app.use(express.static('public'))
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        // -----------------------------------------------
        //           API RESTful: Números y Usuarios
        // -----------------------------------------------
        app.use('/api/Users', new RouterUsers(this.#persistencia).start())

        // -----------------------------------------------
        //        LISTEN DEL SERVIDOR EXPRESS
        // -----------------------------------------------
        const PORT = this.#port
        const server = app.listen(PORT, () =>
            console.log(`✅ Servidor escuchando en http://localhost:${PORT}`)
        )
        server.on('error', error =>
            console.log(`❌ Error en servidor: ${error.message}`)
        )
    }
}

export default Server
