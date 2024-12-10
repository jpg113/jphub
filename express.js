const express = require('express')
const app = express()
const XLSX = require('xlsx');
const PORT=process.env.PORT || 3030
app.get('/students', function (req, res) {
    
const filePath = './info/data.xlsx';


const workbook = XLSX.readFile(filePath);


const sheetName ="family";//workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];


const data = XLSX.utils.sheet_to_json(sheet);

  res.send(data)
})

app.listen(PORT)