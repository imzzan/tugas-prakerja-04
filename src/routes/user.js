const express = require('express');
const { createUser, getAllUsers, getAllUserById, updateUser, deleteUser } = require('../controller/user.js');

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getAllUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;