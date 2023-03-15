const container = document.querySelector('.container');
const search = document.querySelector('.search');
const weatherBox = document.querySelector('.weatherBox');
const weatherDetails = document.querySelector('.weatherDetails');
const error404 = document.querySelector('.error404');


search.addEventListener('click', () => {
    const city = document.querySelector('.search-box input').value;
    if(city == '') console.log("aqui");
    const api_key = 'db4fb461e79cd595e97ca58a9a551415';
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&`).then(response => response.json()).then(json => {
        
    if(json.cod == '404'){
            console.log(city)
            container.style.height = '400px'
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none'
            error404.style.display = 'block';
            error404.classList.add('fadeIn');

            return;
        };

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weatherBox img');
        const temperature = document.querySelector('.weatherBox .temperature');
        const description = document.querySelector('.weatherBox .description');
        const humidity = document.querySelector('.weatherDetails .humiditylevel');
        const wind = document.querySelector('.weatherDetails .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/haze.png';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Haze':
                image.src = 'images/haze.png';
                break;

            case 'default':
                image.src = '';
                break;
        }

        console.log(json)

        temperature.innerHTML = `${parseInt(json.main.temp-273.15)}<span>C</span>`
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn')
        weatherDetails.classList.add('fadeIn');
        container.style.height = '400px'
    })
})


