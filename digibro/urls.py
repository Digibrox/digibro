# digibro/urls.py

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='questions/index.html'), name='home'),
    path('questions/', include('questions.urls')),
    path('account/', include('account.urls')),
    path('clientScreen/', include('clientScreen.urls')),
    path('clients/', include('clients.urls')),
    path('insurers/', include('Insurers.urls')),  # Doğru namespace'i kullandığınızdan emin olun
    path('user_profile/', include('user_profile.urls')),
    path('companies/', include('companies.urls')),
    path('insurerScreen/', include('insurerScreen.urls')),
]
