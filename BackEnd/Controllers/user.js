const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const newUser = new User({ 
          email: req.body.email,
          password: hash
        });
        console.log(newUser)
        newUser.save()
          .then(() => {
            const token = jwt.sign(
              { userId: newUser._id },
              'RANDOM_TOKEN_SECRET',  
              { expiresIn: '24h' }    
            );
  
            res.status(201).json({
              message: 'Utilisateur créé !',
              token: token  
            });
            console.log(token)
          })
         
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.login = (req, res, next) => {
    console.log('Début de la fonction login');
    console.log('Email reçu dans la requête:', req.body.email); 

    User.findOne({ email: req.body.email })
        .then(user => {
            console.log('Résultat de la recherche de l\'utilisateur:', user);
            if (!user) {
                console.log('Utilisateur non trouvé, envoi de la réponse 401');
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    console.log('Validation du mot de passe:', valid);
                    if (!valid) {
                        console.log('Mot de passe incorrect, envoi de la réponse 401');
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    console.log('Génération du token JWT');
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => {
                    console.log('Erreur lors de la comparaison des mots de passe:', error);
                    res.status(500).json({ error });
                });
        })
        .catch(error => {
            console.log('Erreur lors de la recherche de l\'utilisateur:', error);
            res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur.' });
        });
 };

