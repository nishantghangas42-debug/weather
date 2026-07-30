const apiKey = "09a0810f68d5444ba6a98759b4dbca4c";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){
        alert("Enter a city name");
        return;
    }

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("weather").style.display="block";

        document.getElementById("cityName").innerHTML =
        `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerHTML =
        `${Math.round(data.main.temp)}°C`;

        document.getElementById("condition").innerHTML =
        data.weather[0].description;

        document.getElementById("humidity").innerHTML =
        `${data.main.humidity}%`;

        document.getElementById("wind").innerHTML =
        `${data.wind.speed} km/h`;

        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }
    catch(error){
        alert(error.message);
    }

}