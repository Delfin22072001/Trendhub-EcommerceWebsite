from django.http import JsonResponse
from django.core.management import call_command

def load_data(request):
    try:
        call_command('loaddata', 'data.json')
        return JsonResponse({"message": "Data loaded successfully!"})
    except Exception as e:
        return JsonResponse({"error": str(e)})