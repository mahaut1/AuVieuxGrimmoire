const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      console.log('Token non trouvé ou mal formé');
      throw new Error('Token non trouvé ou mal formé');
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log('Token extrait des en-têtes:', token);
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decodedToken) => {
      if (err) {
        console.log('Token invalide:', err.message);
        throw new Error('Token invalide');
      }

      console.log('Token décodé:', decodedToken);

      const userId = decodedToken.userId;
      console.log('ID utilisateur extrait du token:', userId);

      req.auth = {
        userId: userId,
      };
      next();
    });
  } catch (error) {
    console.log('Erreur d\'authentification:', error.message);
    res.status(401).json({ error: error.message }); 
  }
};
