var express = require('express');
var router = express.Router();
const messageController = require('../controllers/messageController')
/* GET home page. */
router.get('/', messageController.message_get);

router.get('/new', function(req, res){

res.render('form', {title: 'Post'});
});


router.post('/new', messageController.message_post);

module.exports = router;
