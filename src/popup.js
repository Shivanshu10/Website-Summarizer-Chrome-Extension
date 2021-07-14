async function getSummary(url, text) {
    var params={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "selection": text})
    };
    var resp=await fetch(url, params);
    return await resp.json();
};
document.getElementById("summarize").addEventListener("click", async () => {
    chrome.tabs.query({currentWindow: true, active: true}, async (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "getSelection", async (resp) => {
            document.getElementById("output").innerText=resp;
            var resp_req=await getSummary("http://127.0.0.1:5000/", resp);           
            document.getElementById("output").innerText=resp_req["selection"];
        });
    });        
});