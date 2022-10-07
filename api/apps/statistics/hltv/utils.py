import requests
from bs4 import BeautifulSoup


def get_hltv_statistics(url):
    """Method is used to scrape statistics from HLTV

    Args:
        url (str): Players HLTV url

    Returns:
        hltv_statistics: Players statistics for HLTV
    """
    print("--> HLTV Stats started")
    player_stats = {}
    player_url = url.replace("player/", "stats/players/")
    player_stats["overall"] = _get_player_overall_stats(player_url)
    player_stats["individual"] = _get_player_individual_stats(player_url)
    print("--> HLTV Stats done")
    return player_stats


def _get_value(string_value):
    if "%" in string_value:
        return string_value
    if "." in string_value:
        return float(string_value)

    return int(string_value)


def _get_player_overall_stats(player_url):
    overall_stats = requests.get(player_url, timeout=10).content
    soup = BeautifulSoup(overall_stats, "html.parser")
    stats_rows = soup.find_all("div", {"class": "col stats-rows standard-box"})
    overall_player_stats = {}
    for stat_row in stats_rows:
        for row in stat_row.find_all("div", {"class": "stats-row"}):
            spans = row.find_all("span")
            label = (
                spans[0]
                .contents[0]
                .replace(" ", "_")
                .replace("/", "")
                .replace("%", "")
                .replace("__", "_")
                .strip("_")
                .lower()
            )

            value = _get_value(spans[1].contents[0])
            overall_player_stats[label] = value

    return overall_player_stats


def _get_player_individual_stats(player_url):
    index = player_url.find("players/") + len("players/")
    individual_stats_url = player_url[:index] + "individual/" + player_url[index:]
    individual_stats = requests.get(individual_stats_url, timeout=10).content
    soup = BeautifulSoup(individual_stats, "html.parser")

    stat_rows = soup.find("div", {"class": "statistics"}).find_all(
        "div", {"class": "standard-box"}
    )

    player_individual_stats = {}
    for row_stat in stat_rows[1:]:
        for row in row_stat.find_all("div", {"class": "stats-row"}):
            spans = row.find_all("span")
            label = (
                spans[0]
                .contents[0]
                .replace(" ", "_")
                .replace("/", "")
                .replace("%", "")
                .replace("__", "_")
                .strip("_")
                .lower()
            )

            value = _get_value(spans[1].contents[0])
            player_individual_stats[label] = value

    return player_individual_stats
