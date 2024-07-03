from django.db import models

class Insurer(models.Model):
    name = models.CharField(max_length=255)
    industry = models.CharField(max_length=255)
    scope = models.CharField(max_length=255)
    policies = models.TextField()
    quote = models.TextField()

    def __str__(self):
        return self.name
