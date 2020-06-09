const Store = require('./store');
const Auth = require('../../auth');
const Model = require('./model');

async function addUser(name = '', lastName = '', email = '', password = '') {
  let userToAdd;
  try {
    name = name.trim();
    lastName = lastName.trim();
    email = email.toLowerCase().trim();
    password = password.trim();
    if (!(name && lastName && email && password)) {
      throw {
        message: 'Missing data something like name, lastName, email, password',
        code: 400,
      };
    }
    const hashedPassword = await Auth.hashPassword(password);
    userToAdd = { name, lastName, email, password: hashedPassword };
    return await Store.addUser(userToAdd);
  } catch (error) {
    throw error;
  }
}

async function listUser() {
  let filter = {};
  try {
    return await Store.listUser(filter);
  } catch (error) {
    throw error;
  }
}

async function updateUser(
  _id,
  name = '',
  lastName = '',
  email = '',
  password = ''
) {
  let userToUpdate = {};
  try {
    name = name.trim();
    lastName = lastName.trim();
    email = email.toLowerCase().trim();
    password = password.trim();

    if (_id) {
      if (name) {
        userToUpdate.name = name;
      }
      if (lastName) {
        userToUpdate.lastName = lastName;
      }
      if (email) {
        userToUpdate.email = email;
      }
      if (password) {
        userToUpdate.password = password;
      }
      if (Object.keys(userToUpdate).length !== 0) {
        return await Store.updateUser(_id, userToUpdate);
      }
    }
    throw {
      message: 'Missing something like _id, name, lastName, email, password',
      code: 400,
    };
  } catch (error) {
    throw error;
  }
}

async function deleteUser(_id) {
  try {
    return await Store.deleteUser(_id);
  } catch (error) {
    throw error;
  }
}

async function signin(email = '', password = '') {
  try {
    email = email.toLowerCase().trim();
    password = password.trim();

    if (!(email && password)) {
      throw {
        message: 'Missing data something like email or password',
        code: 400,
      };
    }
    const user = (await Store.listUser({ email })).pop();
    if (!user) {
      throw { message: `There was no user with email: ${email}`, code: 400 };
    }
    const passwordCorrect = await Auth.comparePassword(password, user.password);
    if (!passwordCorrect) {
      throw { message: 'Password incorrect', code: 400 };
    }
    return Auth.generateAndSignToken({ sub: user.id });
  } catch (error) {
    throw error;
  }
}

async function getUser(req) {
  try {
    const token = Auth.decodeAuthorization(req);
    const payload = Auth.decodeToken(token);
    return await Store.getUser(payload.sub);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUser,
  listUser,
  updateUser,
  deleteUser,
  signin,
  getUser
};
