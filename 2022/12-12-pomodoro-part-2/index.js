let durationInMinutes = 0.1
let initialDuration = durationInMinutes * 60
let durationInSeconds = initialDuration

let timer = undefined


function init() {

    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor((durationInSeconds % 60))

    // Show changeable durration
    document.getElementById("duration").innerHTML = minutes + ":" + seconds.toString().padStart(2, "0")
}

function startTimer() {
    timer = setInterval(() => {

        if (durationInSeconds < 0) {
            clearInterval(timer)
            resetTimer()
            alert("Beep! Timer runs out")
        }

        const minutes = Math.floor(durationInSeconds / 60)
        const seconds = Math.floor((durationInSeconds % 60))

        document.getElementById('timer').innerHTML = minutes + ":" + seconds.toString().padStart(2, "0")

        durationInSeconds -= 1

    }, 1000)
}

function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    durationInSeconds = initialDuration
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor((durationInSeconds % 60))
    document.getElementById('timer').innerHTML = minutes + ":" + seconds.toString().padStart(2, "0")
}

function add() {
    durationInMinutes += 1
    refreshDurationText()
}

function minus() {
    durationInMinutes -= 1
    refreshDurationText()
}

function refreshDurationText() {
    initialDuration = durationInMinutes * 60
    durationInSeconds = initialDuration
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor((durationInSeconds % 60))

    // Show changeable durration
    document.getElementById("duration").innerHTML = minutes + ":" + seconds.toString().padStart(2, "0")
}

init()