# Generated by Django 4.1.1 on 2022-09-07 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("players", "0004_player_email_player_hltv_player_twitter"),
    ]

    operations = [
        migrations.CreateModel(
            name="Nationality",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                ("flag", models.ImageField(upload_to="images/flags")),
            ],
        ),
        migrations.AddField(
            model_name="player",
            name="faceit",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="player",
            name="hltv",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="player",
            name="image",
            field=models.ImageField(blank=True, upload_to="images/players"),
        ),
        migrations.AlterField(
            model_name="player",
            name="twitter",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
