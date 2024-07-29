from django.shortcuts import render
from django.contrib.auth.models import Group

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

    return render(request, 'insurerScreen/index.html', context)
