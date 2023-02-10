const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://piyushyadav0191:<password>@cluster0.w1hdxig.mongodb.net/?retryWrites=true&w=majority";
// for password ASCII
//   @ = %40
// ' = %27
// ! = %21
// # = %23
const client = new MongoClient(uri);

const dbName = "nodemaster";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("test");
  let response = await collection.find({}).toArray();
  console.log(response);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
// what we covered
// connected to mongodb, show data from mongodb
