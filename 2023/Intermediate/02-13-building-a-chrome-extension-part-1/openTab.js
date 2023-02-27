let tabUrls = [];

chrome.tabs.query({currentWindow: true}, (tabs)=> {
    console.log(tabs)
    console.log(tabs.length)
    for (let i = 0; i < tabs.length; i++) {
        tabUrls.push(tabs[i].url);
    }

    console.log(tabUrls);
    console.log('first Tab URL',tabUrls[0])
});
