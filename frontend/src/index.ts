document.addEventListener('DOMContentLoaded', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const headers = new Headers();


                const apiUrl = `http://127.0.0.1:8000/api/weather?lat=${latitude}&lon=${longitude}`;

                fetch(apiUrl,  { headers })
                    .then((response) => response.json())
                    .then((data) => {
                        const city = data.geo_object.locality.name;
                        const temperature = data.fact.temp;
                        document.body.innerHTML = `
              <h2>Погода в ${city}</h2>
              <p>Температура: ${temperature}°C</p>
            `;
                    })
                    .catch((error) => {
                        console.error('Ошибка при получении данных погоды:', error);
                    });
            },
            (error) => {
                console.error('Ошибка получения местоположения:', error);
            }
        );
    } else {
        console.error('Браузер не поддерживает геолокацию');
    }
});
