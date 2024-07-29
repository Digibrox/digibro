from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('Insurers', '0002_userprofile_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfileQuote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.TextField()),
            ],
        ),
    ]
