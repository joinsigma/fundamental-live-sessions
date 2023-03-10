// Initialize values for minutes and seconds
// Decrease time every second

// Start function
// onclick, start decrease the timer (run the decrement function)

// Pause

// Stop function

let minutesDuration = 10
let secondsDuration = minutesDuration *60

function countDown(){
    let timeString = document.querySelector(".time")
    console.log(timeString.innerHTML)

    // Extract time in minutes and seconds
    let time = timeString.innerHTML.split(":")
    console.log(time)
    // Convert all into seconds
    // let minutes = parseInt(time[0])
    // let seconds = parseInt(time[1])
    let [minutes,seconds] = time

    let total  = parseInt(minutes)*60 + parseInt(seconds)
    console.log(total)
    // Decrement
    total -=  1

    console.log(total)
    let newMinute = Math.floor(total/60)
    let newSeconds = total%60

    console.log(newMinute,newSeconds)

    timeString.innerHTML = `${newMinute}:${newSeconds}`
}


let startBtn = document.querySelector("#start")
// This is a global variable
let timer 

startBtn.addEventListener('click',()=>{
    timer = setInterval(countDown,1000)
})

function pauseTimer(){
    console.log("Timer is PAUSED")
    clearInterval(timer)
}
