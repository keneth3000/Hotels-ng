const statusResponses = {
  '200': 'OK',
  '201': 'CREATED',
  '400': 'CLIENT ERROR',
  '401': 'UNAUTHORIZED',
  '404': 'NOT FOUND',
  '500': 'INTERNAL SERVER ERROR',
};

exports.success = (res, data,  user, statusCode = 200) => {
  res.status(statusCode).send({
    error: false,
    message: statusResponses[statusCode],
    data,
    user,
    status: statusCode,
  });
};

exports.error = (res, statusCode = 500) => {
  res.status(statusCode).send({
    error: true,
    message: statusResponses[statusCode],
    data: null,
  });
};
