const express = require('express');
const router = express.Router();
const BookController = require('../controller/book.controller');

router.get('/test', BookController.test);
router.post('/create', BookController.create_book);
router.get('/all', BookController.show_books);
router.put('/update/:id', BookController.update_books);
router.delete('/delete/:id', BookController.delete_books);

module.exports = router;
