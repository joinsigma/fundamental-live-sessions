console.log('Popup script works')

let redButton = document.querySelector("#red")

redButton.addEventListener("click",(event)=>{
    console.log("red")

    chrome.runtime.sendMessage({msg:"updateToRed",color:"red"},response=>{
        
    })
})

// Add an event listener for blue button
// If triggered, send a message to openTab.js, color

let blueButton = document.querySelector("#blue")

blueButton.addEventListener("click",(event)=>{
    console.log("blue")

    chrome.runtime.sendMessage({msg:"updateColor2",color2:"blue"},response=>{
        
    })
})

let quoteInput = document.querySelector("#quote-input")
quoteInput.addEventListener("keypress",(input)=>{
    if(input.key == "Enter"){

        let quoteInput = document.querySelector("#quote-input")
        let quote = quoteInput.value
        console.log(quote)

        quoteInput.value = ""

        // chrome.tabs.sendMessage({msg:"updateColor2",color2:"blue"},response=>{
        
        // })
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{msg:"quote-input",data:quote})
        })

    }
    
})

