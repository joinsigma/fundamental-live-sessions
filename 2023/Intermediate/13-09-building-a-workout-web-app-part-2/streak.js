let user = {
  streak: {
    // start:"27-Feb",
    isChecked: false,
    resetTime: [2, 0, 0],
    nextCheckpointDate: "Sat Mar 14 2023 00:00:00 GMT+0800 (Malaysia Time)",
    lastCheckedIn: "Sat Mar 11 2023 14:51:15 GMT+0800 (Malaysia Time)",
    currentStreak: 11,
    highestStreak: 7,
    records: [2, 7, 4, 5]
  }
}

let loginButton = document.querySelector("#login-button")
loginButton.addEventListener("click", LoginSimulator)

function LoginSimulator() {
  console.log("item clikced")
  let inputDate = document.querySelector("#input-date")
  let inputTime = document.querySelector("#input-time")

  let inputDateValue = inputDate.value
  let inputTimeValue = inputTime.value

  let loginDetails = document.querySelector("#login-details")
  loginDetails.innerHTML = `<span>Login Details</span>
    Your login date is ${inputDateValue} and login time is ${inputTimeValue}
    `

  checkIfStreakMaintains(user, inputDateValue, inputTimeValue)
}

async function checkIfStreakMaintains(user, date, time) {
  // `If streak broken`
  // // - reset first day to new log in date
  // // - reset current streak to 0
  // // - check if current streak > highest streak record
  //     // - update highest streak record with current streak score if TRUE   

  // // - checkpoint date = new log in date + 1 day
  // // - update isChecked status to TRUE
  // // - increment current streak by 1
  let today = new Date()
  let streak = await user.streak
  let nextCheckpointDate = new Date(streak.nextCheckpointDate)

  console.log("DATE", date)

  let [todayYear, todayMonth, todayDate] = date.split("-").map(Number)
  console.log(todayYear, todayMonth, todayDate)

  today.setFullYear(todayYear, todayMonth - 1, todayDate)
  // today.setFullYear(2023,02,30)
  console.log("NEW TODAY DATE", today)

  console.log(today.getTime() - nextCheckpointDate.getTime())
  if (today > nextCheckpointDate) {
    console.log("STREAK IS BROKEN")

    let todayDate = today.getDate()
    document.querySelector(`[data-value="${todayDate}"]`).classList.add("missed")
  } else {
    console.log("STREAK IS MAINTAINED")
    let todayDate = today.getDate()
    document.querySelector(`[data-value="${todayDate}"]`).classList.add("streak")
  }
  console.log(date, time)

  // `else`
  // // - checkpoint date = new log in date + 1 day
  // // - update isChecked status to TRUE
  // // - increment current streak by 1

}

// =============== Calendar DOM codes ======================

let days = document.querySelector(".days")
function getDate() {
  let today = new Date()

  // Setting the days
  let daysPerMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= daysPerMonth; i++) {
    // document.write('<li><a href="#" title="'+i+'" data-value="'+i+'"'+"randomClass"+'>'+i+'</a></li>')
    let setClass = " "

    // Setting the class type
    if (i === 20) { setClass = "selected" }

    switch (i) {
      case 8:
      case 10:
      case 27:
        setClass = "event"
        break

      case 16: setClass = "streak"
        break
    }

    let day = document.createElement("li")
    day.innerHTML = `<a href="#" title=${i}+ data-value="${i}" class="${setClass}" >${i}</a>`
    days.appendChild(day)

  }

  // Setting the month
  let dataValue = document.querySelector(`[data-value ="3"]`)
  console.log({ dataValue })
  dataValue.classList.toggle("event")

  // Setting the year
  document.querySelector(".year").innerHTML = today.getFullYear()
}

getDate()
