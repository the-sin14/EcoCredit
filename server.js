import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Import the 'path' module

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

// Define a route to serve the CSV file
app.get('/data/sample-spending.csv', (req, res) => {
  const filePath = path.resolve(__dirname, 'src', 'scripts', 'sample-spending.csv');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
