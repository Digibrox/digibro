# models.py

from django.db import models

class FormVerisi(models.Model):
    tarih = models.DateField()
    teklif_no = models.CharField(max_length=100)
    sigortali_adi = models.CharField(max_length=100)
    vkn = models.CharField(max_length=100, blank=True, null=True)
