const API_KEY = "5c16ed7cb85f665840e872f63c828625";

const regionCoord = new Map(); //lat : 위도  lon : 경도
regionCoord.set('Fukuoka',{lat : 33.60639, lon : 130.41806});
regionCoord.set('Osaka',{lat : 34.6936, lon : 135.502});
regionCoord.set('Tokyo',{lat : 35.6894, lon : 139.692});
regionCoord.set('Hokkaido',{lat : 43.0620958, lon : 141.3543763});//삿포로의 위도 경도


function jpWeather(){
    const CITYNAME = document.querySelector('body').getAttribute('data-city');
    const city = regionCoord.get(CITYNAME);
    const lat = city.lat;
    const lon = city.lon;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
    fetch(url).then(response => response.json()).then(data =>{
        const cityName = document.querySelector('#weather h4');
        const weather = document.querySelector('#weather div');
        cityName.innerHTML = `${data.name} 현재 날씨`; 
        weather.innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'> 
        <h5>${data.weather[0].description}  ${(data.main.temp-273.15).toFixed(1)}℃</h5>`;
    });
}
jpWeather();