from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('Insurers', '0003_userprofile_policies_userprofile_quote'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='policy',
            field=models.CharField(max_length=255),
        ),
    ]
