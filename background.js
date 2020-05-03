const contextMenuItem = {
  id: "copyText",
  title: "Pretty Copy the current URL",
  contexts: ["all"]
};

const copy = url => {
  var textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = url;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
} 

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(({menuItemId, pageUrl}) => {
  if (menuItemId === contextMenuItem.id) {
    copy(pageUrl);
  }
});
