import csv
from datetime import datetime
from pathlib import Path

from apps.players.models import Nationality, Player, PlayerTeam, Role, Team


def save_players():
    """Method used to save players from csv file to
    database
    """
    players_import_path = Path(
        Path(__file__).resolve().parents[2], "imports", "players"
    )
    filepath = f"{players_import_path}/players.csv"
    with open(filepath, "r", encoding="utf-8") as f:
        reader = csv.reader(f, delimiter=",")
        next(reader, None)
        for row in reader:
            if Player.objects.filter(username=row[0]).first() is not None:
                continue

            date_of_birth_year = datetime.now().year - int(row[2])
            email = row[10] if row[10] != "N/A" else None
            twitter = row[9].lstrip("@")

            roles = _get_classes_instances(
                [role.strip(" ") for role in row[4].split("/")], Role
            )
            nationalities = _get_classes_instances(
                [nation.strip(" ") for nation in row[5].split("/")], Nationality
            )

            team = _get_class_instance(row[3], Team)

            player = Player.objects.create(
                username=row[0],
                first_name=row[1].split(" ")[0],
                last_name=row[1].split(" ")[1],
                date_of_birth=datetime(date_of_birth_year, 1, 1),
                image=None,
                faceit=None,
                twitter=f"https://twitter.com/{twitter}",
                hltv=None,
                email=email,
            )

            for role in roles:
                player.roles.add(role)

            for nation in nationalities:
                player.nationality.add(nation)

            if team is not None:
                player_team = PlayerTeam.objects.create(
                    player=player,
                    team=team,
                    active=True,
                )
                player.teams.add(player_team)

            player.save()


def _get_classes_instances(values, _class):
    result = []
    for value in values:
        obj, created = _class.objects.get_or_create(name=value)
        if obj is None:
            result.append(created)
        else:
            result.append(obj)
    return result


def _get_class_instance(value, _class):
    obj, created = _class.objects.get_or_create(name=value)
    return created if obj is None else obj
