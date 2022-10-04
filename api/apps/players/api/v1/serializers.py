# pylint: disable=abstract-method
from rest_framework import serializers

from apps.players.models import Nationality, Player, PlayerTeam, Role, Team


class TeamSerializer(serializers.ModelSerializer):
    """Serializer used for displaying team"""

    image = serializers.ImageField()

    class Meta:
        """Meta class that defines metadata for class"""

        model = Team
        fields = ["id", "name", "image"]


class PlayerTeamSerializer(serializers.ModelSerializer):
    """Serializer used for displaying teams for specific user"""

    team = TeamSerializer(read_only=True)

    class Meta:
        """Meta class that defines metadata for class"""

        model = PlayerTeam
        fields = ["id", "team", "active"]


class NationalitySerializer(serializers.ModelSerializer):
    """Serializer used for displaying nationality"""

    flag = serializers.ImageField()

    class Meta:
        """Meta class that defines metadata for class"""

        model = Nationality
        fields = "__all__"
        read_only_fields = (
            "id",
            "flag",
        )


class RoleSerializer(serializers.ModelSerializer):
    """Role serializer that returns array of role names"""

    class Meta:
        """Meta class that defines metadata for class"""

        model = Role
        fields = ["id", "name"]


class PlayerListSerializer(serializers.ModelSerializer):
    """Serializer used to list players"""

    age = serializers.IntegerField()
    roles = serializers.SlugRelatedField(slug_field="name", read_only=True, many=True)
    teams = PlayerTeamSerializer(many=True)
    nationality = NationalitySerializer(many=True)
    image = serializers.ImageField()

    class Meta:
        """Meta class that defines metadata for class"""

        model = Player
        exclude = ("date_of_birth",)
        read_only_fields = (
            "id",
            "age",
            "image",
        )
