function getSelectionHTML() {
    var userSelection;
    if (window.getSelection) {
        return window.getSelection().toString();
    }
    else {
        return "";
    }
}
chrome.runtime.onMessage.addListener((req, sender, sendResp) => {
    if (req === "getSelection") {
        var selection = window.getSelectionHTML();
        //alert(selection);
        sendResp(selection);
    }
});