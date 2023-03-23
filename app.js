const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/personDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: String, //this should be capitalize of first letter
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema); //Fruit is the name of collection (Singular)

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Good Apple"
})

// fruit.save(); "this will add apples everytime when we run this script so comment it out"

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Shoeb",
    age: 23
})

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "Best Fruit Ever"
})

const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Rich in magnecium"
})

Fruit.insertMany([kiwi, banana])