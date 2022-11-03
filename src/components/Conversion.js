import React from 'react'


const Conversion = () => {
    return (
        
        
        <div className="container">
            <h1>Shario</h1>
            <div className="upload-img">
                <input type="file" onChange="loadImg(event)" name="" accept=".PDF, .pdf"/>
            </div>
            <embed className="showPdf" src="pdfs/sample.pdf" width="800px" height="2100px" />
            <button onClick="imageConvert()">Save Image As PDF</button>
        </div>
        
    )
}
export default Conversion