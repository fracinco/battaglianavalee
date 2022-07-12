var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    console.log("Connection Successful!");
    
    // define Schema
    const BookSchema = new mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
    BookSchema.methods.brucia = function brucia() {
      console.log("Oh no, "+this.name+" sta a brucià");
    };
    // compile schema to model
    var Book = mongoose.model('Book', BookSchema, 'bookstore');
    
    const Allbooks  = await Book.find(/*{ name: "LA BIBBIA" }*/);
    console.log(Allbooks);
});