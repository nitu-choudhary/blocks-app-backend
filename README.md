
# Full Stack II Assignment Blockchain 2024 submission
This is the submission for the Full Stack II Assignment Blockchain 2024. The project is a simple application that allows users to create transactions and retrieve block addresses and its details using faker-js and mongodb. The project is divided into two parts: the backend and the frontend. The backend is built using NestJS and the frontend is built using React.

## Team Members:
Name: Nitu Kedarmal Choudhary<br>
Student Id: 101529339

Name: Bahar Gurel<br>
Student Id: 101536463

## Features
- Send a transfer, which creates a transaction in database and displays a receipt of the transaction
- Retrieve all transactions
- Retrieve block addresses
- Retrieve block details

## Technologies
- NestJS
- React
- MongoDB Atlas

## API Endpoints
- GET /blocks
- GET /blocks/:address
- POST /transactions/send
- GET /transactions/history

# Setup Instructions for the project to run
## Steps for MongoDB compass to connect to the cloud hosted MongoDB Atlas database
All credentials are added in the code. Please use the following connection string to create a **new connection** to the cloud hosted mongo db in your mongodb compass.

**Use for MongoDB Compass:**
Add this connection string in mongodb compass to connect to the cloud hosted mongo db
```
mongodb+srv://nitu-bahar:s1YpooqC8onqG4ll@nitu-bahar-cluster.bhxxbhs.mongodb.net/
```
You should see `nitu101529339-bahar101536463-db` in your mongodb compass

## Installation and steps to run the backend
__Note:__ Backend code is in block-explorer-backend and front-end code is in blocks-app
1. Install the dependencies
```
cd block-explorer-backend
npm install
```
2. Run the backend code before the front-end code is run.
```
npm run start:dev
```
The app should be running on `port 3000`.


## Installation and steps to run the frontend after the backend is running
__Note:__ Backend code is in [block-explorer-backend](https://github.com/nitu-choudhary/blocks-app-backend) and front-end code is in [blocks-app](https://github.com/nitu-choudhary/blocks-app)
1. Install the dependencies (cd to the blocks-app directory)
```
cd blocks-app
npm install
```
2. Run the app with the following command
```
npm run dev
```
The frontend should be running on `port 5173`
