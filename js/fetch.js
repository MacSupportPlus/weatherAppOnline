var cityName = prompt("Please enter city name", "");
if (cityName != null) {
    document.getElementById("input").textContent = "the city you have chosen is " +   cityName;
console.log(input);
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
// .then(function(response) {
//     return response.json();
// })

// .then(data => {
//     console.log(data);
// })


.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.main.temp);
    let kelvin = data.main.temp;
    let degC = Math.floor(kelvin - 273.15);
    let weatherDescription = data.weather["0"]["description"]
    console.log(weatherDescription);
    console.log(degC);

    //F = C * 1.8 + 32;

    let degF = Math.floor(degC * 1.8 + 32);

    console.log(degF)

    let div = document.querySelector('div');

    
    let img = document.createElement('img');
    img.setAttribute('style', "height:200px ");
    switch (weatherDescription) {
        case 'scattered clouds': 
            img.setAttribute('src', "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-512.png");
        case 'overcast clouds':
            img.setAttribute('src', "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-512.png");
    }
    
    
    console.log(img)
    div.textContent = `Welcome to ${cityName}... Current Temp: ${degF.toString()}`
    div.append(img);
})  