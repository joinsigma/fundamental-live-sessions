console.log("CONTENT SCRIPT IS INJECTED")

let notificationBar = document.createElement("div")
notificationBar.style.height = "20px"
notificationBar.style.backgroundColor = "orange"
notificationBar.style.position = "fixed"
notificationBar.style.top = "0"
notificationBar.style.left = "100px"
notificationBar.style.zIndex = "9999"

chrome.storage.local.get(["quote_key"]).then((result) => {
    console.log("Value currently is " + result.quote_key);
        notificationBar.innerHTML = result.quote_key 
    });

document.body.appendChild(notificationBar)

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request){
        console.log('request is received')
        if(request.msg == "quote-input"){
            console.log("quote is detected",request.data)
            notificationBar.innerHTML = request.data
        }
    }
})

document.addEventListener("mouseup",(event)=>{
    console.log("Text is selected")

    let selection = window.getSelection().toString()
    console.log(selection)

    if(selection.length>0){
        let span = document.createElement("span")
        span.style.backgroundColor = "yellow"

        let range = window.getSelection().getRangeAt(0)
        console.log("range =>",range)
        range.surroundContents(span)
        
        chrome.storage.local.set({ quote_key: selection }).then(() => {
            console.log("Value is set to " + selection);
          });
          
        chrome.storage.local.get(["quote_key"]).then((result) => {
        console.log("Value currently is " + result.quote_key);
            notificationBar.innerHTML = result.quote_key
        });

    }
})