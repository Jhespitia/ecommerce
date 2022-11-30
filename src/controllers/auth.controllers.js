const { AuthServices } = require('../services');

//Authenticate User
const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);

    if (result) {
      const { id, username, email } = result.result;
      const user = { id, username, email };
      const token = AuthServices.getToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: '!<-INVALID INFORMATION ->!' });
    }
  } catch (err) {
    next({
      status: 400,
      errorContent: err,
      messages: '<-!!!Your Email or Password is Incorrect - Try again!!!->',
    })
  }
};

module.exports = {
  userLogin,
};