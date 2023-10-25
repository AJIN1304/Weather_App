

const apiKey = "90c37171a12d2c9eb27f2f25d645f988";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");


async function checkWeather(city){

    const response=await fetch(apiUrl + city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;//it will serch api data and find city name in the data
    document.querySelector(".temp").innerHTML=Math.round( data.main.temp)   + "°C";
    document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity) +"%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) +" km/hr";

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

