document.addEventListener('DOMContentLoaded', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const headers = new Headers();
                headers.append('X-Req-Id', '1689180792496067-16091216986806160979-jmvzo64mxhwflejj-BAL');
                // Запрос к API погоды

                const apiUrl = `https://api.weather.yandex.ru/v2/forecast?lat=${latitude}&lon=${longitude}&extra=true`;

                fetch(apiUrl,  { headers })
                    .then((response) => response.json())
                    .then((data) => {
                        // Обработка данных погоды
                        const city = data.geo_object.locality.name;
                        const temperature = data.fact.temp;
                        console.log(data)
                        // Вывод данных на страницу
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
