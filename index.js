const script = document.createElement("script");
script.src = chrome.runtime.getURL("starbearbattle.js");

document.head.appendChild(script);
