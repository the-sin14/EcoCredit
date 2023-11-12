import express from 'express';
const app = express();

// Define a port
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
