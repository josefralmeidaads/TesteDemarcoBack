const express = require('express');

const userController = require('../controllers/UserController');
const sessionController = require('../controllers/SessionController');
const questionController = require('../controllers/QuestionController');

const routes = express.Router();

//Rotas do usuário
routes.get('/user', userController.show);
routes.post('/user', userController.create);
routes.delete('/user/:id', userController.delete);

//Rotas da sessão
routes.get('/sessions', sessionController.show);
routes.post('/sessions', sessionController.create)

//Rotas da prova
routes.get('/question', questionController.show);
routes.post('/question', questionController.create);
routes.get('/question/listByTeacher', questionController.listByIdTeacther);
routes.get('/question/listById/:id', questionController.listById);
routes.delete('/question/:id', questionController.delete);

module.exports = routes;
