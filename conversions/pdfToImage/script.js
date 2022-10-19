// To convert from image to PDF
var newImg, showPdf;

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