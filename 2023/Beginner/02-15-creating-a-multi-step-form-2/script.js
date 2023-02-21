let containers = document.querySelectorAll(".main-container")

console.log(containers)

let counter = 0

function nextButton(){
    containers[counter].classList.remove('active')
    containers[counter+1].classList.add('active')
    console.log("counter value is now",counter)
    counter++

    // // ======= FOR loop method by Hazim ===========
    // for(let i =0; i<containers.length;i++){
    //     // console.log(containers[i].classList)
    //     // console.log(containers[i].classList[1])
    //     if(containers[i].classList[1] == "active"){
    //         // console.log("active is found for", containers[i])
    //         containers[i].classList.remove("active")
    //         console.log(containers[i+1])
    //         containers[i+1].classList.add("active")
    //         break
    //     }

    //     let currentLoop = i
    //     console.log("current Loop is ",currentLoop)

    // }

    console.log('button has been pressed')
}

function backButton(){
    // Create a function similar to the nextButton() function for user to navigate back to previous page
    // Make sure to add onclick="backButton()" in the back buttons in HTML
}

