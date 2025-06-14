import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || ''
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mini_tienda'

export default {
    PORT,
    MODO_PERSISTENCIA,
    MONGO_URI
}
