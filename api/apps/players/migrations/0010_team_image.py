# Generated by Django 4.1.1 on 2022-09-21 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("players", "0009_alter_nationality_flag"),
    ]

    operations = [
        migrations.AddField(
            model_name="team",
            name="image",
            field=models.ImageField(blank=True, upload_to="images/teams"),
        ),
    ]