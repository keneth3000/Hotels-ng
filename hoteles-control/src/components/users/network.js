const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const Controller = require('./controller');
const Secure = require('./secure');

router.post('/', async (req, res) => {
  const {name, lastName, email,  password } = req.body;
  try {
    const userAdded = await Controller.addUser(name, lastName, email, password);
    response.success(res, userAdded, 201);
  } catch (error) {
    console.error(error);
    response.error(res, error.code);
  }
});

router.post('/signin', async(req, res) => {
  const { email, password } = req.body;
  try {
    const token = await Controller.signin(email, password);
    response.success(res, token);
  } catch (error) {
    console.error(error);
    response.error(res, error.code);
  }
});

router.get('/', async (req, res) => {
  try {;
    const userFounded = await Controller.listUser();
    response.success(res, userFounded, 200);
  } catch (error) {
    response.error(res, error.code)
  }
});

router.put('/', Secure.checkAuth('updateOrDelete'),async(req, res) => {
  const { _id, name, lastName, email, password } = req.body;
  try {
    const userUpdated = await Controller.updateUser(_id, name, lastName, email, password);
    response.success(res, userUpdated);
  } catch (error) {
    console.log(error);
    response.error(res, error.code);
  }
});

router.delete('/', Secure.checkAuth('updateOrDelete'),async(req, res) => {
  const { _id } = req.body;

  try {
    const userDeleted = await Controller.deleteUser(_id);
    response.success(res, userDeleted);
  } catch (error) {
    console.log(error);
    response.error(res, error.code);
  }
});

module.exports = router;
