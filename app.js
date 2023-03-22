const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url, {useNewUrlParser: true});


async function start(){
    await client.connect(function(err){
        assert.equal(null, err); 
    })
    const db = client.db(dbName)
    const haiku = db.collection("haiku")

    const document = {
        fruitName: "Mango",
        review: "Mango is good",
    }

    const result = await haiku.insertOne(document)
    console.log(`Inserted document: _id: ${result.insertedId}`);


    console.log("Connected Successfully to Server!");
    await client.close();
}

start()




// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();

//     await client.db("example").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);


