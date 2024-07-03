from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import UserProfile
from django.contrib.auth.models import User
from django.contrib.auth.models import User, Group
from django.db.models.signals import post_save
from django.dispatch import receiver
def index(request):
    # Tüm kullanıcıları al
    users = User.objects.all()

    context = {
        'users': users,  # users verisini context'e ekleyin
    }

    return render(request, 'user_profile/index.html', context)


@login_required
def profile(request):
    user_profile = request.user.userprofile
    return render(request, 'user_profile/index.html', {'user_profile': user_profile})

@login_required
def update_profile(request):
    if request.method == 'POST':
        user_profile = request.user.userprofile
        user_profile.first_name = request.POST['first_name']
        user_profile.last_name = request.POST['last_name']
        user_profile.email = request.POST['email']
        user_profile.save()
        return redirect('profile')
    else:
        return redirect('profile')

@receiver(post_save, sender=User)
def add_user_to_profile_group(sender, instance, created, **kwargs):
    if created:
        profile_group = Group.objects.get(name='User profiles')
        instance.groups.add(profile_group)