const Auth = require('../../auth');
const response = require('../../network/response');

exports.checkAuth = (action) => {
    function authMiddleWare(req, res, next){
        try {
            const token = Auth.decodeAuthorization(req);
            const payload = Auth.decodeToken(token);

            switch(action){
                case 'updateOrDeleted':
                    req.body._id = payload.sub;
                    next();
                    break;

                case 'list':
                    req.payload = payload;
                    next();
                    break;
                default:
                    throw { message: 'Not implement yet', code: 500 };
            }
        } catch (error) {
            console.log(error);
            response.error(res, error.code);
        }
    }
    return authMiddleWare;
}