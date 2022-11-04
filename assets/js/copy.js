function copyFunction() {
    const copyText = document.getElementById("copyButton");
    // Add class to button
    copyText.classList.add("btn-success");
    // Send message into the console
    console.log("Successfully copied Discord tag to clipboard");
    // Write text from bracket to clipboard
    navigator.clipboard.writeText("Kléma#2152");
    // Wait one seconds, then remove class from button
    setTimeout(function() {
        copyText.classList.remove("btn-success");
    }, 1000);
}