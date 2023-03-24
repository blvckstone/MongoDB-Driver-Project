const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/personDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({ //this should be capitalize of first letter
    name: String, 
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema); //Fruit is the name of collection (Singular)

const fruit = new Fruit ({
    
    rating: 10,
    review: "Peaches are very good"
})

fruit.save(); //"this will add apples everytime when we run this script so comment it out"






//created by your own to find all items inside collections
Fruit.find({}).then(
    function(data){
        // console.log(data)
        // mongoose.connection.close();
        data.forEach(function(element){console.log(element.name)})
    }).catch(
        function(err){
            console.log(err)
        });

  
Fruit.updateOne({_id: "641d4572e8851afc88bc2eea"}, {name: "Peaches"}).then(function(){console.log("Document Updated")})

