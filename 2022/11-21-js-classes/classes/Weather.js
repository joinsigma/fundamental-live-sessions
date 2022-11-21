export class Weather{
    constructor (temperature){
        this.temperature = temperature
    }

    status(){
        if (this.temperature>30) return "weather is hot"
        else if (this.temperature>=25 && this.temperature<=30) return "weather is warm"
        else if (this.temperature<25) return "weather is cool"
    }
}

const weather = new Weather(27)
console.log(weather.status())