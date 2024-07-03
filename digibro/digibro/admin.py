from django.db import models
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import AbstractUser

# CustomUser sınıfını tanımlıyoruz, AbstractUser modelini genişletiyoruz
class CustomUser(AbstractUser):
    company = models.CharField(max_length=100, blank=True, null=True)
    industry = models.CharField(max_length=100, blank=True, null=True)

# CustomUserAdmin sınıfını genişletiyoruz ve list_display'e company ve industry ekliyoruz
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'first_name', 'last_name', 'company', 'industry']  # Yeni alanları ekliyoruz

# UserAdmin sınıfını kaydederken CustomUserAdmin kullanıyoruz
admin.site.unregister(AbstractUser)
admin.site.register(CustomUser, CustomUserAdmin)
