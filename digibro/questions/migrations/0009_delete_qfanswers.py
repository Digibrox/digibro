# Generated by Django 4.2.8 on 2024-08-13 00:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0008_qfanswers'),
    ]

    operations = [
        migrations.DeleteModel(
            name='QFAnswers',
        ),
    ]
