import json

import requests
from environs import Env

from apps.players.models import Player

env = Env()
env.read_env()


def get_faceit_statistics(faceit_username, faceit_player_id=None):
    """Method is used to fetch and process statistics from FACEIT

    Args:
        faceit_username (_type_): Username of player
        faceit_player_id (_type_, optional): Id connected to FACEIT for specified user.
            If there is a faceit player id, it will be used instead of
            fetching all player's data. Defaults to None.

    Raises:
        Exception: If there is a problem finding faceit player id

    Returns:
        statistics
    """
    print("--> Faceit started")

    FACEIT_API_KEY = env("FACEIT_API_KEY")

    if faceit_player_id is None:
        player_information_url = (
            f"https://open.faceit.com/data/v4/players?nickname={faceit_username}"
        )

        response = requests.get(
            player_information_url,
            headers={"Authorization": f"Bearer {FACEIT_API_KEY}"},
            timeout=10,
        )

        if response.status_code == 200:
            player_info = json.loads(response.content.decode("utf-8"))
            if player_info["player_id"]:
                faceit_player_id = player_info["player_id"]
                player = Player.objects.filter(faceit=faceit_username).first()
                player.faceit_id = faceit_player_id
                player.save()
            else:
                raise Exception("Player doesn't have player id")

    # Get player latest month matches
    latest_matches_url = f"https://open.faceit.com/data/v4/players/{faceit_player_id}\
    /history?game=csgo&offset=0&limit=100"
    response = requests.get(
        latest_matches_url,
        headers={"Authorization": f"Bearer {FACEIT_API_KEY}"},
        timeout=10,
    )

    if response.status_code == 200:
        matches = json.loads(response.content.decode("utf-8"))["items"]
        total_items = len(matches)
        wins = 0
        loses = 0
        total_matches = 0
        total_kills = 0
        total_deaths = 0
        total_assists = 0
        total_kd = 0.0
        total_kr = 0.0
        total_hs_pc = 0.0
        total_headshots = 0
        for match in matches:
            faction1_players = match["teams"]["faction1"]["players"]
            f1 = _is_player_in_faction1(faceit_player_id, faction1_players)

            if f1 and match["results"]["winner"] == "faction1":
                wins += 1
            elif f1 and match["results"]["winner"] == "faction2":
                loses += 1
            elif not f1 and match["results"]["winner"] == "faction1":
                loses += 1
            elif not f1 and match["results"]["winner"] == "faction2":
                wins += 1

            match_statistics_url = (
                f"https://open.faceit.com/data/v4/matches/{match['match_id']}/stats"
            )

            response = requests.get(
                match_statistics_url,
                headers={"Authorization": f"Bearer {FACEIT_API_KEY}"},
                timeout=10,
            )

            if response.status_code == 200:
                rounds = json.loads(response.content.decode("utf-8"))
                for match in rounds["rounds"]:
                    total_matches += 1
                    players = (
                        match["teams"][0]["players"] + match["teams"][1]["players"]
                    )
                    for player in players:
                        if player["player_id"] == faceit_player_id:
                            total_kd += float(player["player_stats"]["K/D Ratio"])
                            total_kr += float(player["player_stats"]["K/R Ratio"])
                            total_hs_pc += float(player["player_stats"]["Headshots %"])
                            total_kills += int(player["player_stats"]["Kills"])
                            total_deaths += int(player["player_stats"]["Deaths"])
                            total_headshots += int(player["player_stats"]["Headshots"])
                            total_assists += int(player["player_stats"]["Assists"])

    # get data, filter data and pass it as dictionary back
    print("--> Faceit done")
    return (
        {}
        if total_matches == 0
        else {
            "wins": wins,
            "loses": loses,
            "wr": wins / total_items,
            "total_matches": total_items,
            "stats": {
                "kd": total_kd / total_matches,
                "kr": total_kr / total_matches,
                "hs_pc": total_hs_pc / total_matches,
                "kills": total_kills / total_matches,
                "deaths": total_deaths / total_matches,
                "headshots": total_headshots / total_matches,
                "assists": total_assists / total_matches,
            },
        }
    )


def _is_player_in_faction1(faceit_player_id, faction1_players):
    for player in faction1_players:
        if player["player_id"] == faceit_player_id:
            return True
    return False
