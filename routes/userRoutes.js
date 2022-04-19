const router = require('express').Router();
const User = require('../models/User');

// creating user
router.post('/', async(req, res)=> {
    try {
        const {name, email, password, picture} = req.body;
        console.log(req.body);
        const user = await User.create({ name, email, password, picture });
        res.status(201).json(user);
    } catch (e) {
        let msg;
        if(e.code == 11000){
            msg = "Cet e-mail corresponds déjà à un utilisateur"
        } else {
            msg = e.message;
        }
        console.log(e);
        res.status(400).json(msg);
    }
})

// login user
router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findByCredentials(email, password);
        user.status = 'En ligne';
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

// updating user

router.put('/update', async(req, res) => {
  try {
      const user = await User.findById(req.body._id);

      if (user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = req.body.password || user.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
          message: "Profil modifié",
          data: updatedUser,
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email
        });
      }


  } catch (e) {
    let msg;
    if(e.code == 11000){
      msg = "Cet email corresponds déjà à un utilisateur"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg);
  }
})

module.exports = router
