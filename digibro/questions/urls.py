from django.urls import path
from . import views

app_name = 'questions'

urlpatterns = [
    path('', views.index, name='home'),  
    path('index/', views.index, name='index'), 
    path('dashboard/', views.dashboard_view, name='dashboard'), 
    path('form-gonder/', views.form_gonder, name='form_gonder'),
]
