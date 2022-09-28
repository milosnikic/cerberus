from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from apps.players.api.v1.filters import PlayerFilter
from apps.players.api.v1.serializers import (
    NationalitySerializer,
    PlayerListSerializer,
    RoleSerializer,
)
from apps.players.models import Nationality, Player, Role


class PlayersListAPI(ListAPIView):
    """List API used for displaying all players"""

    queryset = Player.objects.all()
    serializer_class = PlayerListSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    filterset_class = PlayerFilter
    search_fields = [
        "username",
        "first_name",
        "last_name",
        "teams__team__name",
    ]


class NationalitiesListAPI(ListAPIView):
    """List API used for displaying all nationalities with related information"""

    queryset = Nationality.objects.order_by("id").all()
    serializer_class = NationalitySerializer
    permission_classes = [AllowAny]


class RolesListAPI(ListAPIView):
    """List API used for displaying all available roles"""

    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [AllowAny]
