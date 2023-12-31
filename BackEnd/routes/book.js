const express = require('express');
const router = express.Router();
const bookCtrl=require('../Controllers/book')
const auth = require('../middleware/auth');


router.post('/',auth, bookCtrl.createBook);

router.get('/:id', auth, bookCtrl.getOneBook);

router.put('/:id', auth, bookCtrl.modifyBook);

router.delete('/:id', auth, bookCtrl.deleteBook);

router.get('/', auth, bookCtrl.getAllBooks);

module.exports = router;
