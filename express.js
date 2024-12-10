const express = require('express');
const cors = require('cors');
const app = express();
const XLSX = require('xlsx');
const PORT = process.env.PORT || 3030;

// Enable CORS for GitHub Pages
app.use(cors({
  origin: 'https://jpg113.github.io' 
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