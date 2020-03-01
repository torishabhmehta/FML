# Generated by Django 2.1.1 on 2020-02-16 15:03

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Channels',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=63)),
                ('isPlaylist', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Playlists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=63)),
                ('isFavourite', models.BooleanField(default=False)),
                ('channel', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='driver.Channels')),
            ],
        ),
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=127)),
                ('key', models.CharField(max_length=63, unique=True)),
                ('source', models.CharField(default='ytb', max_length=3)),
                ('date', models.DateField(default=datetime.date.today)),
                ('rank', models.PositiveIntegerField(unique=True)),
                ('isFavourite', models.BooleanField(default=False)),
                ('timesPlayed', models.PositiveIntegerField(default=0)),
                ('playlist', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='driver.Playlists')),
            ],
        ),
        migrations.AddField(
            model_name='channels',
            name='songs',
            field=models.ManyToManyField(to='driver.Songs'),
        ),
    ]
