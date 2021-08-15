// import { EVENT } from "./constants/runtimeMessages";
console.log("TEST123123");
window.onload = () => {
  console.log("LOADED");
  document.getElementById("openingSkip").click = (e) => {
    console.log({ e });
    chrome.runtime.sendMessage({ action: "FINISH" }, function (response) {
      console.log({ response });
    });
  };
};

const testClick = () => {
  console.log("TUDOIUSDIOF");
};

//   watchaSkipperClassObservation.disconnect();
