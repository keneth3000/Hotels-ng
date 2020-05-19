const hotelRouter = require('../components/hotels/network');
const userRouter = require('../components/users/network');

exports.generateRoutes = (app) => {
    app.use('/hotel', hotelRouter);
    app.use('/user', userRouter);
}