from rest_framework.response import Response
from rest_framework.views import APIView
import requests


class WeatherView(APIView):
    @staticmethod
    def get(request):
        apiUrl = f"https://api.weather.yandex.ru/v2/forecast?lat={request.GET.get('lat')}&lon={request.GET.get('lon')}&extra=true&lang='en_US' "
        headers = {
            'X-Yandex-API-Key': '01155944-e09b-4bd2-a2ba-36101f5caf25',
            'Content-Type': 'application/json'
        }

        response = requests.get(apiUrl, headers=headers)
        data = response.json()


        # Возвращаем JSON-ответ с данными погоды
        return Response(data)
