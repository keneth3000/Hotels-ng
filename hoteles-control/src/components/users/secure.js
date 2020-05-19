const Auth = require('../../auth');
const respose = require('../../network/response');

exports.checkAuth = (action) => {
    function authMiddleware(req, res, next){
        try {
            const token = Auth.decodeAuthorization(req);
            const payload = Auth.decodeToken(token);

            switch(action){
                case 'updateOrDelete':
                    req.body._id = payload.sub;
                    next();
                    break;

                default:
                    throw { message: 'No implemented yet', code: 500 };
            }
        } catch (error) {
            respose.error(res, error.code);
        }
    }
    return authMiddleware;
}