const Model = require('./model');

exports.addUser = async (user) => {
  try {
    const userAlreadyExists = await Model.findOne({
      email: user.email,
    });
    if (userAlreadyExists) {
      throw {
        message: `The email ${user.email} is already taken`,
        code: 400,
      };
    }
    const userToAdd = new Model(user);
    return await userToAdd.save();
  } catch (error) {
    throw error;
  }
};

exports.listUser = async (filter) => {
  try {
    return await Model.find(filter);
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async (_id, userToUpdate) => {
  try {
    const userUpdated = await Model.findByIdAndUpdate(_id, userToUpdate, {
      new: true,
    });
    if (!userToUpdate) {
      throw { message: `user with _id ${_id} not founded`, code: 404 };
    }
    return userUpdated;
  } catch (error) {
    throw error;
  }
};

exports.deleteUser = async (_id) => {
  try {
    const userDeleted = await Model.findByIdAndDelete(_id);
    if (!userDeleted) {
      throw { message: `user with _id ${_id} not founded`, code: 404 };
    }
    return userDeleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

