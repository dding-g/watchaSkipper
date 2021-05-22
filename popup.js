// import { EVENT } from "./constants/runtimeMessages";

// Initialize background page
chrome.runtime.onConnect.addListener((port) => {
  console.log("connected ", port);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "START" } /* callback */);
  });

  chrome.runtime.getBackgroundPage(function (backgroundPage) {
    console = backgroundPage.console;

    document.getElementById("openingSkip").click = (e) => {
      //   console.log({ e, watchaSkipperClassObservation });
      console.log("TEST");
      chrome.runtime.sendMessage({ action: "TEST" }, function (response) {
        console.log({ response });
      });
    };
  });
});
//   watchaSkipperClassObservation.observe(
//     document.querySelector("[data-select='skip_opning']"),
//     {
//       attributes: true,
//     }
//   );

//   watchaSkipperClassObservation.disconnect();
