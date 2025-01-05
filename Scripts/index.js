



/* Using David Shim Library */
/* QR Code generator */

var qrcode;


function makeCode () {    
  var elText = document.getElementById("textArea");
  var qrCodeContainer = document.getElementById("qrcode");
  var card = qrCodeContainer.parentElement;
  
  if (!elText.value) {
    elText.focus();
    return;
  }
  
  qrCodeContainer.innerHTML = "";
  

  /* QR Code sizing */
  qrcode = new QRCode(qrCodeContainer, {
        text: elText.value,
        width: 315,
        height: 300,
    });
}

makeCode();


/* Generate button click event*/
$("#btnGenerate").on("click", function () {
    makeCode();
    if($('#textArea').val() != '') {
      $('#btnDownload').prop('disabled', false);
    }
  });



/* button download section  */


function downloadCode() {
  // Select the card element
  const cardElement = document.querySelector(".card"); 


  // Use html2canvas to capture the card as an image
  html2canvas(cardElement, { scale: 2 }).then((canvas) => {
      const cardImage = canvas.toDataURL("image/png");

      // Create an invisible anchor element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = cardImage;
      downloadLink.download = "QRCord.png"; // Filename for the download

      // Trigger the download
      downloadLink.click();
  }).catch((error) => {
      console.error("Error capturing the card:", error);
      alert("An error occurred while generating the download.");
  });
}

// Attach the download function to the button's click event
$("#btnDownload").on("click", function () {
  downloadCode();
});


