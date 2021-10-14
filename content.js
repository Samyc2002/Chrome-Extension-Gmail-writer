chrome.runtime.sendMessage({todo: "showPageAction"});
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.todo === "edit") {
        waitForElm('.Am.Al.editable.LW-avf.tS-tW').then(elm => elm.innerText = "Hi, this works!" + elm.innerText);
    }
});