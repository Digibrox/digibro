from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('Insurers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=models.CASCADE, to='auth.User'),
        ),
    ]
