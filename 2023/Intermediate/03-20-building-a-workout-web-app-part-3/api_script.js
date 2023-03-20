const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81f9a1b948msha29bb208e3f1d55p16550bjsn195b7d4e087a',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

let typeOptions = ["cardio","olympic_weightlifting","plyometrics","powerlifting","strength","stretching","strongman"]
let muscleOptions = ["abdominals","abductors","adductors","biceps","calves","chest","forearms","glutes","hamstrings","lats","lower_back","middle_back","neck","quadriceps","traps","triceps"]
let difficultyOptions = ["beginner","intermediate","expert"]

//Initializing default (global) values so that the fetch option will work regardless of input
let typeChoice = "cardio",muscleChoice="abdominals",difficultyChoice = "beginner"

//Creating the select options dynamically
let selectType = document.querySelector("#type-select")

typeOptions.forEach((option)=>{
    const optionElement = document.createElement("option")
    optionElement.value = option
    optionElement.textContent = option
    selectType.appendChild(optionElement)
})

let muscleType = document.querySelector("#muscle-select")

muscleOptions.forEach((option)=>{
    const optionElement = document.createElement("option")
    optionElement.value = option
    optionElement.textContent = option
    muscleType.appendChild(optionElement)
})

let difficultyType = document.querySelector("#difficulty-select")


difficultyOptions.forEach((option)=>{
    const optionElement = document.createElement("option")
    optionElement.value = option
    optionElement.textContent = option
    difficultyType.appendChild(optionElement)
})

selectType.addEventListener('change',(event)=>{
    console.log(event.target.value)
    typeChoice = event.target.value
})

muscleType.addEventListener('change',(event)=>{
    console.log(event.target.value)
    muscleChoice = event.target.value
})

difficultyType.addEventListener('change',(event)=>{
    console.log(event.target.value)
    difficultyChoice = event.target.value
})

//Create a function that fetches the exercise based on the input parameters
async function fetchExercises(API_URL){
    let response = await fetch(API_URL,options)
    let data = await response.json()
    //console.log(data)

    return data
}

//definining our global variables
let exercises 
let favourites =[]

async function displayExercises(){
    console.log('input choices',typeChoice,muscleChoice,difficultyChoice)
    let API_URL = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${typeChoice}&muscle=${muscleChoice}&difficulty=${difficultyChoice}`
    exercises = await fetchExercises(API_URL) //updates the global variable
    console.log("output exercises",exercises)
}

function addToFavourites(){
    favourites.push(...exercises)
    console.log(favourites)
}
