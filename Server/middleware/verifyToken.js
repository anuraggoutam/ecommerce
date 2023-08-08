const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  isAuth(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403);
      throw new Error('You are not alowed to do that!');
    }
  });
};

module.exports = {
  isAdmin,
  isAuth,
  verifyTokenAndAuthorization,
};
