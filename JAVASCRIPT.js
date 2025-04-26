setTimeout(() => {
    const element = document.getElementById("pdf-area");
    html2pdf()
      .from(element)
      .set({
        margin: 0,
        filename: "qr_code.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .save();
  }, 1000); // 1 second delay
  