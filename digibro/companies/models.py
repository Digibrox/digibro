from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    industry = models.CharField(max_length=100)  # industry alanını zorunlu hale getirme
    scope = models.TextField()  # scope alanını zorunlu hale getirme
    policies = models.CharField(max_length=100, default="Belirtilmemiş")
    quote = models.CharField(max_length=100, default="Belirtilmemiş")



    def __str__(self):
        return self.name
