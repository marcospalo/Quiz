var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
  res.render('author', { autor: 'Marcos Palomo' });
});

//Autoload
router.param('quizId', quizController.load);

//Definicion de rutas de /quizes
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes', quizController.index);
router.get('/quizes/:search', quizController.index);

module.exports = router;