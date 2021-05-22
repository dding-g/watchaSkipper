chrome.webNavigation.onCompleted.addListener(function (e) {
  if (e.url?.includes("watcha.com/watch")) {
    chrome.scripting.executeScript({
      target: { tabId: e.tabId },
      files: ["skipper.js"],
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  if (request.action === "FINISH") sendResponse({ farewell: "goodbye" });
});
