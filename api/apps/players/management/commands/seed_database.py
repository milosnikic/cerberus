from django.core.management.base import BaseCommand, CommandError

from apps.players.models import Player
from apps.players.utils import save_players


class Command(BaseCommand):
    """Command is used for populating database from file, when there is no players
    in database

    Raises:
        CommandError: When there is a problem with saving players
    """

    help = "Populates database with initial data"

    def handle(self, *args, **options):
        """Method is used to manage saving players from file"""

        if Player.objects.count() == 0:
            self._seed_database()
        else:
            self.stdout.write(self.style.WARNING("There are players in the database"))
            option = input("Are you sure you want to call this command? [y/N] ")
            if option.lower() == "y":
                self._seed_database()

    def _seed_database(self):
        try:
            save_players()
            self.stdout.write(self.style.SUCCESS("Successfully saved all players..."))
        except Exception as exc:
            raise CommandError(f"Couldn't save players...: {exc}") from exc
