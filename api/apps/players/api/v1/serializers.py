# pylint: disable=abstract-method
from rest_framework import serializers

from apps.players.models import Nationality, Player, PlayerTeam


class TeamSerializer(serializers.ModelSerializer):
    """Serializer used for displaying team"""

    team = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        """Meta class that defines metadata for class"""

        model = PlayerTeam
        fields = ["id", "team", "active"]


class NationalitySerializer(serializers.ModelSerializer):
    """Serializer used for displaying nationality"""

    flag = serializers.ImageField(use_url=False)

    class Meta:
        """Meta class that defines metadata for class"""

        model = Nationality
        fields = "__all__"
        read_only_fields = (
            "id",
            "flag",
        )


class PlayerListSerializer(serializers.ModelSerializer):
    """Serializer used to list players"""

    age = serializers.IntegerField()
    roles = serializers.SlugRelatedField(slug_field="name", read_only=True, many=True)
    teams = TeamSerializer(many=True)
    nationality = NationalitySerializer(many=True)
    image = serializers.ImageField(use_url=False)

    class Meta:
        """Meta class that defines metadata for class"""

        model = Player
        exclude = ("date_of_birth",)
        read_only_fields = (
            "id",
            "age",
            "image",
        )
