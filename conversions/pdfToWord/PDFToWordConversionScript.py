# import PyPDF2

# FILE_PATH = 'sharioPDF.pdf'

# with open(FILE_PATH, mode='rb') as f:

#     reader = PyPDF2.PdfFileReader(f)

#     page = reader.getPage(0)

#     print(page.extractText())

# PDF to Word Script

import win32com.client
import os

# Connects to Word
word=win32com.client.Dispatch("word.Application")
word.visible=0

# Grab pdf doc
doc_pdf="test.pdf"
input_file=os.path.abspath(doc_pdf)

# Open input file
wb=word.Documents.Open(input_file)

# Create output PDF file
output_file=os.path.abspath(doc_pdf[0:-4] + "docx".format())
wb.SaveAs2(output_file, FileFormat=16)

print("PDF to  DOCx is completed")
wb.Close()

#Exit Word
word.Quit()