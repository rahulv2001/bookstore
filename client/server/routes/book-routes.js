const express = require("express");
const { getAllBooks, getById, addBook, updateBook, deleteBook, } = require( "../controllers/book-controllers.js");
const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.get('/:id', getById);
router.delete('/:id', deleteBook);
router.put('/:id', updateBook);

// export default router;
module.exports = router;