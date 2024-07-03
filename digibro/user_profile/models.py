from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    date_joined = models.DateTimeField(auto_now_add=True)
    company = models.CharField(max_length=100)  # Yeni alan: Şirket
    industry = models.CharField(max_length=100)  # Yeni alan: Endüstri
    scope = models.CharField(max_length=100)  # Yeni alan: Kapsam

    def __str__(self):
        return self.user.username
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance, company='Company', industry='Industry', scope='Scope')

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()