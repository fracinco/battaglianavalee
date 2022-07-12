async function main() {
  var mongoose = require('mongoose');
  
  // make a connection 
  mongoose.connect('mongodb://localhost:27017/mydb');
  
  // get reference to database
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
      
      // a document instance
      var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
      book1.brucia();
      // save model to database
      book1.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
      });
      
      
  });
  
}
main();
/*const kittens = await Kitten.find();

console.log(kittens);
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);*/