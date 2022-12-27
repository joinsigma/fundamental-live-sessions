const initialPomodoroDuration = 25
const initialShortDuration = 5
const initialLongDuration = 15

let durationInMinutes = initialPomodoroDuration
let shortDurationInMinutes = initialShortDuration
let longDurationInMinutes = initialLongDuration

let initialDuration = durationInMinutes * 60
let durationInSeconds = initialDuration

let timer = undefined

// Settings elements
const pomodoroDurationInput = document.getElementById('pomodoro-duration')
const shortDurationInput = document.getElementById('short-duration')
const longDurationInput = document.getElementById('long-duration')

function init() {
    refreshDurationText()
    refreshTimerText()
}

function startTimer() {
    timer = setInterval(() => {

        if (durationInSeconds < 0) {
            clearInterval(timer)
            resetTimer()
            alert("Beep! Timer runs out")
        }

        refreshTimerText()

        durationInSeconds -= 1

    }, 1000)
}

function stopTimer() {
    clearInterval(timer)
    timer = undefined
}

function resetTimer() {
    durationInSeconds = initialDuration
    refreshTimerText()
}

function add() {
    durationInMinutes += 1
    refreshDurationText()
}

function minus() {
    durationInMinutes -= 1
    refreshDurationText()
}

function refreshTimerText() {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor((durationInSeconds % 60))
    document.getElementById('timer').innerHTML = minutes + ":" + seconds.toString().padStart(2, "0")
}

function refreshDurationText() {
    initialDuration = durationInMinutes * 60
    durationInSeconds = initialDuration
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor((durationInSeconds % 60))

    // Show changeable durration
    document.getElementById("duration").innerHTML = minutes + ":" + seconds.toString().padStart(2, "0")
}

function setTimer(type) {
    // Check if a timer is running
    if (timer) {
        const endTimer = window.confirm("A timer is running")
        if (endTimer) {
            stopTimer()
        } else {
            return
        }
    }

    // Check which timer type
    switch (type) {
        case 'pomodoro':
            durationInSeconds = durationInMinutes * 60
            break;
        case 'short':
            durationInSeconds = shortDurationInMinutes * 60
            break;
        case 'long':
            durationInSeconds = longDurationInMinutes * 60
            break;
        default:
            break
    }

    refreshTimerText()
}

function openSettings() {
    // Get the dialog
    let dialogElement = document.getElementById("dialog");

    // Change that element's display property to block
    dialogElement.style.display = "block";

    // Timer values
    pomodoroDurationInput.setAttribute('value', durationInMinutes)
    shortDurationInput.setAttribute('value', shortDurationInMinutes)
    longDurationInput.setAttribute('value', longDurationInMinutes)
}

function hideSettings() {
    // Get the dialog
    let dialogElement = document.getElementById("dialog");

    // Change that element's display property to none
    dialogElement.style.display = "none";

}

function save() {
    durationInMinutes = pomodoroDurationInput.value
    shortDurationInMinutes = shortDurationInput.value
    longDurationInMinutes = longDurationInput.value

    hideSettings()

    setTimer('pomodoro')
}

init()
