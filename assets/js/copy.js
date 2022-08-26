function copyFunction() {
    const copyText = document.getElementById("copyButton");
    copyText.classList.add("btn-success");
    console.log("Successfully copied Discord tag to clipboard");
    navigator.clipboard.writeText("Kléma#2152");
    setTimeout(function() {
        copyText.classList.remove("btn-success");
    }, 1000);
}