# Insurers/urls.py

from django.urls import path
from . import views

app_name = 'insurers'  # Namespace tanımlaması

urlpatterns = [
    path('', views.index, name='index'),
    path('insurer_info', views.insurer_info, name='insurer_info'),
]
