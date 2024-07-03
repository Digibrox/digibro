from django.shortcuts import render
from .models import Insurer

def index(request):
    insurers = Insurer.objects.all()
    return render(request, 'Insurers/index.html', {'insurers': insurers})

def insurer_info(request, insurer_name):
    insurer = Insurer.objects.get(name=insurer_name)
    return render(request, 'Insurers/insurer_info.html', {'insurer': insurer})
