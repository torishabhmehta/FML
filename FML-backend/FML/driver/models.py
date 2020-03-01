import datetime

from django.db import models


class Songs (models.Model):
    """
    This model is meant to represent the stored songs.
    """

    name = models.CharField(
        max_length = 127,
    )

    key = models.CharField(
        max_length = 63,
        unique  = True
    )

    source = models.CharField(
        max_length = 3,
        default = "ytb"
    )

    date = models.DateField(
        default=datetime.date.today,
    )

    rank = models.PositiveIntegerField(
        unique = True,
    )

    playlist = models.ForeignKey(
        'Playlists',
        null = True,
        on_delete = models.SET_NULL,
    )

    isFavourite = models.BooleanField(
        default=False,
    )

    timesPlayed = models.PositiveIntegerField(
        default = 0,
    )




class Playlists (models.Model):
    """
    This model is meant to represent the playlists 
    made by users.
    """ 

    name = models.CharField(
        max_length = 63,
    )

    channel = models.OneToOneField(
        'Channels',
        on_delete = models.CASCADE,
    )

    isFavourite = models.BooleanField(
        default=False,
    )




class Channels (models.Model):
    """
    This model is meant to represent the playlists 
    made by users.
    """ 

    name = models.CharField(
        max_length = 63,
    )

    songs = models.ManyToManyField(
        'Songs',
        related_name = "songs",
    )

    isPlaylist = models.BooleanField(
        default=False,
    )

    playing = models.ForeignKey(
        'Songs',
        null = True,
        on_delete = models.SET_NULL,
        related_name = "now_playing",
    )

    isPlaying = models.BooleanField(
        default = False,
    )

    timeTag = models.TimeField(
        null = True,
        auto_now=False, 
        auto_now_add=False,
    )


    





        
        




