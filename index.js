const container = document.querySelector('.container');
const search = document.querySelector('.search');
const weatherBox = document.querySelector('.weatherBox');
const weatherDetails = document.querySelector('.weatherDetails');
const error404 = document.querySelector('.error404');
const city = document.querySelector('.search-box input')

search.addEventListener('click', () => {
    if(city == '') return;
    const api_key = 'db4fb461e79cd595e97ca58a9a551415';
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&`).then(response => response.json()).then(json => {
        
    if(json.cod == '404'){
            console.log("entrei")
            container.style.height = '400px'
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none'
            error404.style.display = 'block';
            error404.classList.add('fadeIn');

            return;
        };

        error404.style.display = 'none';
        not-found.classList.remove('fadeIn');

        const image = document.querySelector('.weatherBox img');
        const temperature = document.querySelector('.weatherBox .temperature');
        const description = document.querySelector('.weatherBox .description');
        const humidity = document.querySelector('.weatherBox .humidity');
        const wind = document.querySelector('.weatherBox .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/clear.png';
                break;

            case 'Snow':
                image.src = 'images/clear.png';
                break;

            case 'Clouds':
                image.src = 'images/clear.png';
                break;

            case 'Haze':
                image.src = 'images/clear.png';
                break;

            case 'default':
                image.src = '';
                break;
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn')
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px'
    })
})


