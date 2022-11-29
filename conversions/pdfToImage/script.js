// To convert from image to PDF
var newImg, showImg;

function loadImg(event) {
    showImg = document.getElementById('showImg');
    showImg.src = URL.createObjectURL(event.target.files[0]);

    newImg = document.createElement('img');
    newImg.src = URL.createObjectURL(event.target.files[0]);

    showImg.onload = function() {
        URL.revokeObjectURL(showImg.src); // free memory
    }
}

// Converts any file image to a PDF file
function pdfConvert() {
    // For testing purposes
    console.log(newImg);

    // Will store PDF file (ref: https://github.com/parallax/jsPDF)
    var doc = new jsPDF();

    // Add the image uploaded
    doc.addImage(newImg, 10, 10);

    // Saves as PDF
    doc.save('sharioPDF.pdf');
}