# Generated by Django 5.0.4 on 2024-04-20 20:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=50, unique=True)),
                ('ava_url', models.TextField(default='https://i.pinimg.com/564x/d1/e3/d2/d1e3d2a12bc3d0221898c4391dffcfff.jpg')),
            ],
        ),
        migrations.RemoveField(
            model_name='friends',
            name='name',
        ),
        migrations.AddField(
            model_name='friends',
            name='members',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Friends.members+', to='api.members'),
        ),
        migrations.AlterField(
            model_name='friends',
            name='nickname',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Members.friends+', to='api.members', to_field='nickname'),
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.TextField(default='https://i.pinimg.com/564x/dc/67/34/dc67343698a947085cbbfc83b1c884c5.jpg')),
                ('hashtag', models.CharField(default='hi', max_length=50)),
                ('members', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='api.members')),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('members', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='api.members')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='api.posts')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=200)),
                ('birth_date', models.TextField(verbose_name='date of birth')),
                ('ava_url', models.TextField(default='https://i.pinimg.com/564x/d1/e3/d2/d1e3d2a12bc3d0221898c4391dffcfff.jpg')),
                ('nickname', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to='api.members', to_field='nickname')),
            ],
        ),
    ]
