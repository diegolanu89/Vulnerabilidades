import mongoose from 'mongoose';
import config from '../config.js';

class ConexionMongo {
  static async conectar() {
    try {
      await mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('✅ Conectado a MongoDB');
    } catch (error) {
      console.error('❌ Error al conectar con MongoDB:', error.message);
      process.exit(1);
    }
  }
}

export default ConexionMongo;
