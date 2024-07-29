# urls.py

from django.urls import path
from . import views

app_name = 'companies'

urlpatterns = [
    path('', views.index, name='index'),
    path('company/<int:company_id>/delete/', views.delete_company, name='delete_company'),
     path('edit/<int:company_id>/', views.edit_company, name='edit_company'),
]
