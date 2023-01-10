import json

from celery import shared_task
from apps.players.models import Player
from apps.statistics.faceit.utils import get_faceit_statistics
from apps.statistics.hltv.utils import get_hltv_statistics


@shared_task
def get_players_statistics():
    """Task that gets statistics for every player"""
    print("--> Task started")
    all_players = Player.objects.all()

    for player in all_players:
        if player.faceit is not None or player.hltv is not None:
            stats = _get_player_statistics(player.hltv, player.faceit)
            player.statistics = stats
            player.save()
    print("--> Task done")


def _get_player_statistics(hltv_url, faceit_username):
    player_stats = {}

    player_stats["hltv"] = get_hltv_statistics(hltv_url) if hltv_url else {}
    player_stats["faceit"] = (
        get_faceit_statistics(faceit_username) if faceit_username else {}
    )

    return json.dumps(player_stats, indent=4)
