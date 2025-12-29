1.To check version open the first app folder then open terminal in vscode
2.type below commands in terminal:
npm init
Set -ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm -v
now version will be displayed then type command,
npm init
click enter few times until it displays your directory
npm install mongodb --same
now in vs code left side in src create new file name it, index1.js
type below code in that file 


const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("xplaindb");
    const user = { name: "John", age: 50, height: 6.11 };

    await db.collection("users").insertOne(user);
    console.log("Record successfully created");

    const found = await db.collection("users").findOne({});
    console.log("Record successfully read:", found);

    await db.collection("users").updateOne({ age: 50 }, { $set: { name: "John Smith" } });
    console.log("Record successfully updated");

    await db.collection("users").deleteOne({ age: 50 });
    console.log("Record successfully deleted");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

after typing the above code now in terminal type
node index1.js
now you can see the output as shown below
Output:
