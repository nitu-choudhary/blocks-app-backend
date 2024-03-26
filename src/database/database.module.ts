import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
const { MongoClient, ServerApiVersion } = require('mongodb');

// nitu-bahar is the username for cluster, nitu101529339-bahar101536463-db is the database name, and nitu-bahar-cluster is the cluster name
// Replace the placeholder <password> with the password for the nitu-bahar user
const uri = "mongodb+srv://nitu-bahar:<password>@nitu-bahar-cluster.bhxxbhs.mongodb.net/nitu101529339-bahar101536463-db?retryWrites=true&w=majority&appName=nitu-bahar-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

@Module({
    imports: [
        MongooseModule.forRoot(uri)
    ],
})

export class DatabaseModule {}