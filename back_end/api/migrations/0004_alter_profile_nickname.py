# Generated by Django 5.0.4 on 2024-04-23 08:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_posts_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='nickname',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to='api.members'),
        ),
    ]
