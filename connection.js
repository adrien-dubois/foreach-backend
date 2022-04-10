const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.2exi5.mongodb.net/mernChat?retryWrites=true&w=majority`, (err) => {
    if(err) console.log(err);
    else console.log('Connected to DataBase');
})