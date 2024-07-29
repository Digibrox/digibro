from django.contrib import admin
from .models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'email', 'company', 'industry', 'scope', 'date_joined')

admin.site.register(UserProfile, UserProfileAdmin)
