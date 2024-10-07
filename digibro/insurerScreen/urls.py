from django.urls import path
from . import views
app_name = 'insurerScreen'

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard_view, name='dashboard')
]