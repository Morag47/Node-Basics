# Node-Basics

API REST básica desarrollada con Node.js, Express y MySQL para gestionar personajes.

## Funcionalidades

- **GET** `/api/personajes` - Obtiene todos los personajes
- **GET** `/api/personajes/:id` - Obtiene un personaje por ID
- **POST** `/api/personajes` - Crea un nuevo personaje
- **PUT** `/api/personajes/:id` - Actualiza un personaje existente
- **DELETE** `/api/personajes/:id` - Elimina un personaje

## Requisitos

- Node.js
- MySQL Server

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Morag47/Node-Basics.git
cd Node-Basics
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la base de datos ejecutando el archivo `database.sql` en MySQL:
```bash
mysql -u root -p < database.sql
```

4. Configura la conexión a la base de datos en `src/config/dbConfig.js` con tus credenciales.

5. Inicia el servidor:
```bash
node index.js
```

El servidor estará corriendo en `http://localhost:3002`

## Tecnologías

- Node.js
- Express
- MySQL
- Body-parser
