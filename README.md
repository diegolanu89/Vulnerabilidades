
# 🛡️ Proyecto "Vulnerabilidad"

Este proyecto demuestra una arquitectura modular para el manejo de distintas **persistencias de datos**: en memoria, archivo y MongoDB, a través de una API REST desarrollada con Node.js y Express.

## 🧰 Tecnologías Utilizadas

| Tecnología     | Descripción                   |
|----------------|-------------------------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Entorno de ejecución JavaScript |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) | Framework backend minimalista |
| ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) | Base de datos NoSQL |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | ODM para MongoDB |
| ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat&logo=dotenv&logoColor=black) | Variables de entorno |
| ![nodemon](https://img.shields.io/badge/nodemon-76D04B?style=flat&logo=nodemon&logoColor=black) | Reinicio automático de servidor |
| ![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white) | Editor de código |
| ![cross-env](https://img.shields.io/badge/cross--env-3C873A?style=flat&logo=node.js&logoColor=white) | Configuración de entorno multiplataforma |

---

## 🚀 Inicio Rápido

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/vulnerabilidad.git
   cd vulnerabilidad
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar entorno**
   Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=8080
   MODO_PERSISTENCIA=DB
   MONGO_URI = [Aquí va la url donde se monto el servidor local de su mongoDb]
   ```

---

## 🧪 Modos de Ejecución

### ➕ Desarrollo
```bash
npm run dev:mem     # Persistencia en memoria
npm run dev:file    # Persistencia en archivo
npm run dev:db      # Persistencia en MongoDB
```

### 📦 Producción
```bash
npm run start:mem
npm run start:file
npm run start:db
```

---

## 🍃 Base de Datos MongoDB

### macOS / Linux

Instalación con Homebrew:
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

Verificá que funcione:
```bash
mongosh
```

### Windows

Instalar desde el sitio oficial:  
🔗 https://www.mongodb.com/try/download/community

Luego, asegurate de agregar MongoDB al `PATH` del sistema.

---

## ⚙️ Automatización con VS Code

El archivo `.vscode/tasks.json` contiene tareas preconfiguradas para facilitar el desarrollo:

| Tarea                           | Descripción                                  |
|--------------------------------|----------------------------------------------|
| 🍃 **Iniciar MongoDB**          | Inicia el servicio de base de datos MongoDB |
| 🚀 **Iniciar servidor Node**    | Ejecuta el servidor backend en modo dev     |
| 🐚 **Abrir Mongo Shell**        | Abre una terminal interactiva de Mongo      |
| 🔧 **Iniciar todo**             | Ejecuta las tres tareas anteriores en orden |

> ✅ Ejecutá desde Visual Studio Code:  
> `Cmd + Shift + P` → `Run Task` → `🔧 Iniciar todo`

---

### ⚠️ Compatibilidad con Windows

> Las tareas automatizadas requieren entornos tipo Unix (como Bash o Zsh). En Windows:

**Opciones recomendadas:**
- Usar **Git Bash**, **PowerShell** o **WSL2** con VS Code.
- O bien ejecutar manualmente:

```bash
mongod          # Inicia el servidor MongoDB
nodemon app.js  # Ejecuta el servidor de Node con recarga automática
mongosh         # Abre el shell interactivo de MongoDB
```


---


## 👩‍💻 Autor

Desarrollado por Diego Peyrano  
📧 diegolanus89@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/diego-peyrano-061b63120?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) – [GitHub](https://github.com/diegolanu89)
