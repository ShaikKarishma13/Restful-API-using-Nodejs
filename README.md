# Restful-API-using-Nodejs

This program demonstrates CRUD operations using MongoDB with Node.js.
It connects to a local MongoDB database, inserts a document, reads it, updates it, and finally deletes it using the MongoDB Node.js driver.

🔹 Node.js

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser. It is used to build server-side applications and supports asynchronous, non-blocking execution.

🔹 npm (Node Package Manager)

npm is used to initialize projects and install required packages.
In this project, npm is used to install the MongoDB driver.

🔹 MongoDB

MongoDB is a NoSQL, document-oriented database that stores data in JSON-like documents. It is flexible, scalable, and does not require a fixed schema.

🔹 MongoDB Node.js Driver

The mongodb package enables Node.js applications to connect and interact with MongoDB and perform database operations.

🔹 CRUD Operations

Create – Insert a document into the collection

Read – Retrieve a document

Update – Modify an existing document

Delete – Remove a document


🔹 Conclusion

This program shows how Node.js and MongoDB work together to perform basic CRUD operations efficiently using asynchronous programming.




Expected Output:
Connected to MongoDB
Record successfully created
Record successfully read: { 
  _id: new ObjectId("64f1a9c2e8b8c123456789ab"),
  name: 'John',
  age: 50,
  height: 6.11
}
Record successfully updated
Record successfully deleted

