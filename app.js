const express = require('express');
const bodyParser = require('body-parser');
var QRCode = require('qrcode');
const app = express();
let ejs = require("ejs");
let fs = require("fs");
let pdf = require("html-pdf");
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{

 var file = fs.createReadStream('output.pdf');
var stat = fs.statSync('output.pdf');
res.setHeader('Content-Length', 4);
res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
file.pipe(res);

})





//connection create
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("Server is running at port 3000");
})