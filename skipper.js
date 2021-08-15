// import { EVENT } from "/constants/runtimeMessages";
// console.log({ EVENT });

var watchaSkipperClassObservation = new MutationObserver((mutations) => {
  mutations.forEach((m) => {
    if (m.attributeName === "class") {
      m.target.click();
    }
  });
});

chrome.runtime.sendMessage({ action: "FINISH" }, function (response) {
  if (response.farewell === "setSkipper") {
    setTimeout(() => {
      watchaSkipperClassObservation.observe(
        document.querySelector("[control-id='ControlID-2']"),
        {
          attributes: true,
        }
      );
    }, 3000);
  }
});
