
const Book = require ("../model/book.js");

module.exports.getAllBooks = async (req, res) => {
    let books;
    try {
        books = await Book.find();
    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ message: "No Products found" });
    } else {
        return res.status(200).json({ books });
    }
}


module.exports.getById = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).json({ message: "No Products found" });
    } else {
        return res.status(200).json({ book });
    }
}

module.exports.addBook = async (req, res) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(500).json({ message: "Unable to add" });
    } else {
        return res.status(201).json({ book });
    }
}

module.exports.updateBook = async (req, res) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;

    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update book by this id" });
    } else {
        return res.status(200).json({ book });
    }
}

module.exports.deleteBook = async (req, res) => {
    const id = req.params.id;

    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to delete book by this id" });
    } else {
        return res.status(200).json({ message: "successfylly deleted book" });
    }
}