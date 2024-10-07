from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from .models import FormVerisi
from datetime import datetime

from django.conf import settings

from .get_qf import generate_questionnsire_forms
def dashboard_view(request):
    return render(request, 'clientScreen/dashboard.html')
def index(request):
    # Kullanıcı admin grubunda mı kontrol et
    is_admin = False
    if request.user.is_authenticated:
        admin_group_name = 'Admin'  # 'Admin' grubunun ismini gruplarınıza göre ayarlayın
        admin_group = Group.objects.get(name=admin_group_name)

        # Kullanıcının "Admin" grubuna üye olup olmadığını kontrol et
        is_admin = admin_group in request.user.groups.all()

    context = {
        "is_admin": is_admin  # is_admin'i context'e ekle
    }


    basliklar = generate_questionnsire_forms()
    # print("\n\n\n",basliklar)
    context = {
        'basliklar' : basliklar
    }
    return render(request, 'clientScreen/index.html', context)
