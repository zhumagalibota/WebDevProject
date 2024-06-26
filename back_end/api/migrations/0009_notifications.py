# Generated by Django 5.0.4 on 2024-04-24 18:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_friends_members_alter_friends_nickname'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notifications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=150)),
                ('nickname', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifs', to='api.members')),
            ],
        ),
    ]
