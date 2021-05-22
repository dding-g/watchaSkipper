// import { EVENT } from "/constants/runtimeMessages";
// console.log({ EVENT });

// var watchaSkipperClassObservation = new MutationObserver((mutations) => {
//   mutations.forEach((m) => {
//     if (m.attributeName === "class") {
//       m.target.click();
//     }
//   });
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log({ request });
//   sendResponse({ farewell: "goodbye" });
// });

chrome.runtime.sendMessage({ action: "FINISH" }, function (response) {
  alert(response);
});
