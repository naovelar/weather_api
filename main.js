let form = document.querySelector('#weatherDataForm')
const app_id='Y2b5ff1a3850dba5620b735e5d5710108'
let query_city;
let query_zip;
let hide=true;


const weatherData = async () => {
    let response;

    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${query_zip}&units=imperial&appid=${app_id}`)
    console.log(response.data)
    document.getElementById('cityName').innerHTML=''
    document.getElementById('cityName').innerHTML=query_city

    let max=response.data.main.temp_max + '\u00B0 F';
    document.getElementsByTagName("table")[0].style.border="thin solid white";
    document.getElementsByTagName("table")[0].style.color='white'
    document.getElementById('high header').innerHTML='High'
    document.getElementById('high').innerHTML=''
    document.getElementById('high').append(max)

    let min=response.data.main.temp_min + '\u00B0 F';
    document.getElementsByTagName("table")[1].style.border="thin solid white";
    document.getElementsByTagName("table")[1].style.color='white'
    document.getElementById('low header').innerHTML='Low'
    document.getElementById('low').innerHTML=''
    document.getElementById('low').append(min)

    let forecast=response.data.weather[0]['main']
    document.getElementsByTagName("table")[2].style.border="thin solid white";
    document.getElementsByTagName("table")[2].style.color='white'
    document.getElementById('forecast header').innerHTML='Forecast'
    document.getElementById('forecast').innerHTML=''
    document.getElementById('forecast').append(forecast)

    let humidity=response.data.main.humidity + '%';
    document.getElementsByTagName("table")[3].style.border="thin solid white";
    document.getElementsByTagName("table")[3].style.color='white'
    document.getElementById('humidity header').innerHTML='Humidity'
    document.getElementById('humidity').innerHTML=''
    document.getElementById('humidity').append(humidity)
    
};

const capCity = (cityString) => {
    let parts=cityString.split(' ')
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1).toLowerCase();
        console.log(parts[i])
    }
    return parts.join(' ')
}


form.addEventListener('submit', (event) => {
      event.preventDefault();
      query_city = document.querySelector('#city').value;
      query_city=capCity(query_city);
      query_zip = document.querySelector('#zip').value;
      let result=weatherData();
})
