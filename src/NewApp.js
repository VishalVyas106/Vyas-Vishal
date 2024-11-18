// copy gmail code 

function copyGmail() {
    const gmail = "vyasVishal.Work@gmail.com";
    navigator.clipboard.writeText(gmail).then(() => {
      alert("Gmail copied to clipboard: " + gmail);
    }).catch(err => {
      console.error("Failed to copy Gmail: ", err);
    });
  }
  