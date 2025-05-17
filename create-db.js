const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB server');

    const database = client.db('nextjs-lab');
    const collection = database.collection('users');
    try {
      await collection.drop();
      console.log('Dropped existing collection');
    } catch (e) {
      console.log('Collection did not exist, creating new');
    }
    const result = await collection.insertMany([
      {
        name: "Hamdy Salah",
        username: "hamdysalah",
        email: "hamdy@gmail.com.com",
        phone: "123-456-7890",
        website: "hamdy.com",
        address: {
          street: "123 Main St",
          suite: "Apt 4B",
          city: "Assiut",
          zipcode: "10101"
        },
        company: {
          name: "ITI",
          catchPhrase: "Innovative solutions for tomorrow"
        }
      },
      {
        name: "user",
        username: "user",
        email: "user@example.com",
        phone: "987-654-3210",
        website: "user.com",
        address: {
          street: "456 Park Ave",
          suite: "Suite 201",
          city: "cairo",
          zipcode: "02108"
        },
        company: {
          name: "ITI",
          catchPhrase: "Creating beautiful experiences"
        }
      }
    ]);

    console.log(`${result.insertedCount} documents were inserted`);
    const documents = await collection.find({}).toArray();
    console.log('Inserted documents:');
    console.log(documents);

  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

run().catch(console.error);