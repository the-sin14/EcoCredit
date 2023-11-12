import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Import the 'path' module
import { createObjectCsvWriter } from 'csv-writer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // Declare the app variable at the top

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

// Add a server endpoint to handle form submissions and update the CSV file
app.post('/addData', (req, res) => {
  const newData = req.body;

  // Updated path to point to the existing sample-spending.csv file
  const csvFilePath = path.join(__dirname, 'src', 'scripts', 'sample-spending.csv');

  const csvWriter = createObjectCsvWriter({
    path: csvFilePath, // Correct path to your existing CSV file
    header: [
      { id: 'date', title: 'DATE' },
      { id: 'item', title: 'ITEM' },
      { id: 'location', title: 'LOCATION' },
      { id: 'amount', title: 'AMOUNT' }
    ],
    append: true
  });

  csvWriter
    .writeRecords([newData])
    .then(() => res.json({ message: 'Data added successfully' }))
    .catch(error => res.status(500).json({ message: 'Internal Server Error', error }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
