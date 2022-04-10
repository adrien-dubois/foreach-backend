# Foreach - Chat application

## Backend - MERN Application

This is the repository of the Backend Side of a Chat application, based on a **_MERN stack_**

### Technos & Tools
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Html logo" title="Html" height="25" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS logo" title="CSS" height="25"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS logo" title="JS" height="25" />  

### MERN Stack
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDb logo" title="MongoDb" height="25" /> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" title="Express" height="25"/> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React logo" title="React" height="25" /> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node logo" title="Node" height="25" /> 

### Dependencies

- `BCrypt` 5.0.1
- `CORS` 2.8.5
- `Dotenv` 16.0.0
- `Express` 4.17.3
- `Mongoose` 6.2.9
- `Nodemone` 2.0.15
- `Socket.io` 4.4.1
- `Validator` 13.7.0

### Server steps

#### 1 - FILES
Create the package.json with the command `npm init -y` 
Then install dependencies `npm i nodemon express bcrypt cors dotenv mongoose socket.io validator`

Create the server.js at project's root.

After that, go to package.json, and in `scripts` part, delete test line to add :

```json
    "start": "node server.js",
    "dev": "nodemon server.js"
```

Now, you can run server with `npm run dev`


#### 2 - Mongo DB

First don't froget to create a `.gitignore` file to keep passwords secret if you want to push on GitHub. You can take React's Gitignore base file.

Create a new database / a new database user, copy the password and ADD USER.

Back to your application, create a .env file with :

```env
DB_PW=your_password_here
DB_USER=your-user
```

On MongoDB, go to Database 
    -> click on Connect 
    -> Add your IP 
    -> Connect your application
    -> copy the connection string
    -> go to connection.js

and put this in it, and past the connection string from MongoDB into the backticks after connect : 

```js
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(``)
```

replace <user> and <password> by `${process.env.DB_USER}` and `${process.env.DB_PW}` and then `myFirstDatabase` by the name of your app