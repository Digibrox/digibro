from django.db import models
from django.contrib.auth.models import User

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
#     company = models.CharField(max_length=100)
#     industry = models.CharField(max_length=100)
#     scope = models.CharField(max_length=100)
#     policies = models.CharField(max_length=100)
#     quote = models.CharField(max_length=100)

#     def __str__(self):
#         return self.user.username

class Company(models.Model):
    name = models.CharField(max_length=100)
    industry = models.CharField(max_length=100)  # industry alanını zorunlu hale getirme
    scope = models.TextField()  # scope alanını zorunlu hale getirme
    policies = models.CharField(max_length=100, default="Belirtilmemiş")
    quote = models.CharField(max_length=100, default="Belirtilmemiş")
