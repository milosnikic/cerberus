# Generated by Django 4.1.1 on 2022-09-08 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("players", "0008_alter_player_email"),
    ]

    operations = [
        migrations.AlterField(
            model_name="nationality",
            name="flag",
            field=models.ImageField(blank=True, upload_to="images/flags"),
        ),
    ]
