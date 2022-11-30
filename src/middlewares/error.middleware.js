const handleError = (err, req, res, next) => {
  const { status, errorContent, message } = err;
  res.status(404).json({
    status: '!-> FAIL <-!',
    message: `${req.method} ${req.url} The URL you request does not exist in our server`,
    err: errorContent.message
  });
};

// const handleError = (err, req, res, next) => {
//   const { status, errorContent, message } = err;
//   res.status(status).json({
//     message,
//     err: errorContent.message,
//   });
// };

module.exports = handleError;