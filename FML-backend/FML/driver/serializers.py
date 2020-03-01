from rest_framework import serializers

from driver.models import Songs, Playlists, Channels


class SongSerializer(serializers.ModelSerializer):
    """
    Serializer for the Songs model
    """

    class Meta:
        """
        Meta class for the serializer
        """

        model = Songs
        fields = '__all__'


class PlaylistSerializer(serializers.ModelSerializer):
    """
    Serializer for the Playlists model
    """

    class Meta:
        """
        Meta class for the serializer
        """

        model = Playlists
        fields = '__all__'


class ChannelSerializer(serializers.ModelSerializer):
    """
    Serializer for the Channels model
    """

    class Meta:
        """
        Meta class for the serializer
        """

        model = Channels
        fields = '__all__'