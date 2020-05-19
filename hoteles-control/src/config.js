const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || 'localhost'
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost'
const MONGODB_PORT = process.env.MONGODB_PORT || 27017
const DB_NAME = process.env.DB_NAME || 'control-hoteles'
const MONGO_URL = process.env.MONGO_URL || `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${DB_NAME}`
const PUBLIC_DIRECTORY = process.env.PUBLIC_DIRECTORY || 'public'
const REPORT_DIRECTORY = process.env.REPORT_DIRECTORY || 'reports'
const SALT = process.env.SALT || 5
const SECRET = process.env.SECRET || 'secret'

module.exports = {
    PORT,
    HOST,
    MONGODB_HOST,
    MONGODB_PORT,
    DB_NAME ,
    MONGO_URL,
    PUBLIC_DIRECTORY,
    SALT,
    SECRET,
    REPORT_DIRECTORY
}