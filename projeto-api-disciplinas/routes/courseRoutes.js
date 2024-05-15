const courseController = require('../controllers/courseController');
const express = require('express');
const router = express.Router();

router.get('/courses',courseController.getAllCourses); //rota para listar todos os cursos
router.get('/courses/:id', courseController.getCourseById); //rota para buscar um curso
router.post('/courses/create', courseController.createCourse); //rota post para cadastrar curso
router.put('/courses/:id', courseController.updateCourse); //rota para atualizar um curso
router.delete('/courses/:id', courseController.deleteCourse); //rota para deletar um curso
router.get('/courses/edit/:id', courseController.formEditCourse)//rota para renderizar um formulário de edição

module.exports = router;

