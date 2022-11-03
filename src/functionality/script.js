// To convert from PDF to image
var newImg, showPdf;

// needed imports

import fs from "fs";
import pdfpdf2img from "pdf-img-convert";


function loadImg(event) {
    showPdf = document.getElementById('showPdf');
    showPdf.src = URL.createObjectURL(event.target.files[0]);

    newPdf = document.createElement('img');
    newPdf.src = URL.createObjectURL(event.target.files[0]);

    showPdf.onload = function() {
        URL.revokeObjectURL(showPdf.src); // free memory
    }
}

// Converts any file image to a PDF file
function imageConvert() {
    // For testing purposes
    console.log(newPdf);

    // Will store PDF file (ref: https://github.com/parallax/jsPDF)
    var doc = new jsPDF();

    // Add the image uploaded
    doc.addImage(newPdf, 10, 10);

    // Saves as PDF
    doc.save('sharioPDF.pdf');
}

function imageConvertUsingPdjJs() {
    // Both HTTP and local paths are supported
    var outputImages1 = pdf2img.convert('conversions/pdfToImage/pdfs/sample.pdf../pdf_in_local_filesystem.pdf');

    // From here, the images can be used for other stuff or just saved if that's required:

    var fs = require('fs');

    outputImages1.then(function(outputImages) {
        for (i = 0; i < outputImages.length; i++)
            fs.writeFile("output"+i+".png", outputImages[i], function (error) {
            if (error) { console.error("Error: " + error); }
            });
        });
}

/*
Steps for pdf to img convert:

npm install pdf-img-convert

https://github.com/ol-th/pdf-img-convert.js

Facing dependency issues when installing
*/