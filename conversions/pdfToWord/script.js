// To convert from word to PDF
var newPdf, showPdf;

function loadImg(event) {
    showPdf = document.getElementById('showImg');
    showPdf.src = URL.createObjectURL(event.target.files[0]);

    newPdf = document.createElement('img');
    newPdf.src = URL.createObjectURL(event.target.files[0]);

    showPdf.onload = function() {
        URL.revokeObjectURL(showPdf.src); // free memory
    }
}

// Converts word document to a PDF file
function wordToPdfConvert() {
    const path = require('path');
    const unoconv = require('awesome-unoconv');
    
    const sourceFilePath = path.resolve('./example.docx');
    const outputFilePath = path.resolve('./example.pdf');
    
    unoconv
    .convert(sourceFilePath, outputFilePath)
    .then(result => {
        console.log(result); // return outputFilePath
    })
    .catch(err => {
        console.log(err);
    });
}