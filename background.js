let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.webNavigation.onCompleted.addListener(
  function () {
    alert("This is my favorite website!");
  },
  { url: [{ hostSuffix: "watcha.com", pathContains: "watch" }] }
);
