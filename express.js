const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const XLSX = require('xlsx');
const PORT = process.env.PORT || 3030;

// Enable CORS for the specific origin
app.use(cors({
  origin: 'http://127.0.0.1:5500' // Allow requests only from this origin
}));

app.get('/students', function (req, res) {
    const filePath = './info/data.xlsx';
    const workbook = XLSX.readFile(filePath);
    const sheetName = "family"; // workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    res.send(data); // Send the parsed data as a response
});

// Start the server
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT} `);
});