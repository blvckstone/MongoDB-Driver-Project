const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/personDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({ //this should be capitalize of first letter
    name: {
        type: String,
        required: [true, "Please specify name also"]
    }, 
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema); //Fruit is the name of collection (Singular)

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Good Apple"
})

fruit.save(); //"this will add apples everytime when we run this script so comment it out"






//created by your own to find all items inside collections
Fruit.find({}).then(
    function(data){
        // console.log(data)
        mongoose.connection.close();
        data.forEach(function(element){console.log(element.name)})
    }).catch(
        function(err){
            console.log(err)
        });

  


