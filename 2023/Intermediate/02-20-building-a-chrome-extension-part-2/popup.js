console.log('Popup script works')

let redButton = document.querySelector("#red")

redButton.addEventListener("click",(event)=>{
    console.log("red")

    chrome.runtime.sendMessage({msg:"updateToRed",color:"red"},response=>{
        
    })
})

// Add an event listener for blue button
// If triggered, send a message to openTab.js, color
