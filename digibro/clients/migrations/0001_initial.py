# Generated by Django 4.2.8 on 2024-04-11 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=100)),
                ('industry', models.CharField(max_length=100)),
                ('scope', models.CharField(max_length=100)),
            ],
        ),
    ]
