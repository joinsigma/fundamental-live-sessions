chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request){
        console.log("request content is",request)

        // if it's red button trigger, do this
        if(request.msg == "updateToRed"){
            document.body.style.backgroundColor = request.color
        }
        
        // if it's blue button trigger, do this awesome stuff
        if(request.msg == "updateColor2"){
            document.body.style.backgroundColor = request.color2
        }
    }
})

// Add an event listener for blue button in the popup.js
// If triggered, send a message to openTab.js, to change the color to blue
