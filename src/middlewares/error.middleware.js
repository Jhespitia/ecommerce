
const handleError = (err, req, res, next) => {
  const { status, errorContent, message } = err;
  res.status(status).json({
    message,
    err: errorContent.message,
  });
};

module.exports = handleError;