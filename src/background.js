chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, {file: "./foreground.js"}, () => {console.log("INJECTED..");});
})