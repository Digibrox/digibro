# urls.py

from django.urls import path
from . import views

app_name = 'clients'

urlpatterns = [
   path('', views.index, name='index'),
   path('client_info/<str:company_name>/', views.client_info, name='client_info'),
]
