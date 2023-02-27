chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request){
        console.log("request content is",request)

        // if it's red button trigger, do this
        if(request.msg == "updateToRed"){
            document.body.style.backgroundColor = request.color
        }
        
        // if it's blue button trigger, do this awesome stuff
    }
})