chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "wikipedia-lookup",
    title: "Search on Wikipedia",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "wikipedia-lookup" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    const wikipediaUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${query}`;
    chrome.windows.create({
      url: wikipediaUrl,
      type: "popup",
      width: 1080,
      height: 710
    });
  }
}); 