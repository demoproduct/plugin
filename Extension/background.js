chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

   chrome.scripting.executeScript({
                    target: { tabId: tabId,  allFrames: true},
                    files: ["./jquery-3.3.0.min.js"]
                })
                    .then(() => {
                        console.log("INJECTED THE Jquery SCRIPT.");
                    });
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {

        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./foreground_styles.css"]
        })
            .then(() => {
                console.log("INJECTED THE FOREGROUND STYLES.");

                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ["./foreground.js"]
                })
                    .then(() => {
                        console.log("INJECTED THE FOREGROUND SCRIPT.");
                    });
            })
            .catch(err => console.log(err));
    }
});
