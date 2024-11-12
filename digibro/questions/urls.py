from django.urls import path
from . import views

app_name = 'questions'

urlpatterns = [
    path('', views.index, name='home'),  
    path('index/', views.index, name='index'), 
    path('dashboard/', views.dashboard_view, name='dashboard'), 
    path('opportunities/', views.opportunities_view, name='opportunities'), 
    path('renewal/', views.renewal_view, name='renewal'), 
    
    path('add_records/', views.add_records_view, name='add_records'), 
    path('form-gonder/', views.form_gonder, name='form_gonder'),
    path('save-data/', views.save_data, name='save_data'),
    path('update-data/', views.update_data, name='update_data'),
]
