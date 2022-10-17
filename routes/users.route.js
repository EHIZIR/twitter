const { Router } = require('express');

const router = Router();

const { usersController } = require('../controllers/users.controller');

router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUsersById);
router.post('/users', usersController.createUsers);
router.delete('/users', usersController.deleteUsers);
router.patch('/users/savs/:id', usersController.createSavs);


module.exports = router;

