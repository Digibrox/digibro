# Generated by Django 3.2.9 on 2024-04-24 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormVerisi',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tarih', models.DateField()),
                ('teklif_no', models.CharField(max_length=100)),
                ('sigortali_adi', models.CharField(max_length=100)),
                ('vkn', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
