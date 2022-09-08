from apps.players.api.v1.serializers import PlayerListSerializer
from apps.players.models import Player
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny


class PlayersListAPI(ListAPIView):
    """List API used for displaying all players"""

    queryset = Player.objects.all()
    serializer_class = PlayerListSerializer
    permission_classes = [AllowAny]
