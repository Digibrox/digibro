from django.urls import path
from . import views
app_name = 'clientScreen'

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard_view, name='dashboard')
    # Diğer URL tanımlamaları buraya eklenebilir
]