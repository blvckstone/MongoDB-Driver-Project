const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'fruitsDB'; // Database name to be create

const client = new MongoClient(url, {useNewUrlParser: true});


//angela yu's code not working i added async function 


async function start(){  //async function added
    await client.connect(function(err){
        assert.equal(null, err); 
    })
    const db = client.db(dbName) //creating database

    console.log("Connected Successfully to Server!");

    inserDocument(db)

    
    // await client.close();
    
    
    
    
}
start()


const inserDocument = function(db){

    const fruits = db.collection("fruits") //creating collections

    const document = [{ // the data which we want to push in collection or database
        fruitName: "Mango",
        review: "Mango is good",
    },
    {
        fruitName: "Apple",
        review: "Mango is not good",
    },
    {
        fruitName: "Apple",
        review: "Mango is not good",
    },
]

    const result = fruits.insertMany(document, function(err, result){
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log(`Inserted document: _id: ${result.insertedId}`); // logged the data that inserted
        callback(result)
        
    }) // insert command or data push to database

    console.log(result)
    
    
}





