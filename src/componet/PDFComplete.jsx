import React, { useState } from "react"
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib"
import download from "downloadjs"
import pdf from "../../public/SellyournewsetsatLEGO2sell.pdf"
const PDFModificationExample = () => {
  const handleModifyPdf = async () => {
    const url = pdf
    // console.log(url)
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText("This text was added with JavaScript!", {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    })

    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "SellyournewsetsatLEGO2sell.pdf", "application/pdf")
  }

  return (
    <div>
      <p>
        Click the button to modify an existing PDF document with{" "}
        <code>pdf-lib</code>
      </p>
      <button onClick={handleModifyPdf}>Modify PDF</button>
      <p className="small">(Your browser will download the resulting file)</p>
    </div>
  )
}

export default PDFModificationExample
