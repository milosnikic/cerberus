from datetime import datetime

from django.db import models

from apps.core.models import BaseModel


class Role(models.Model):
    """Player can have multiple in-game roles"""

    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        """String representation of role

        Returns:
            str: Role name
        """
        return f"{self.name}"


class Team(BaseModel):
    """Player can have multiple teams

    .. note::
        At specific moment, play can only play for one team (active).
    """

    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/teams", blank=True)

    def __str__(self) -> str:
        """String representation of team

        Returns:
            str: Team name
        """
        return f"{self.name}"


class Nationality(models.Model):
    """Player can have multiple nationalities"""

    name = models.CharField(max_length=50)
    flag = models.ImageField(upload_to="images/flags", blank=True)

    def __str__(self) -> str:
        """String representation of nationality

        Returns:
            str: Nationality name
        """
        return f"{self.name}"


class Player(models.Model):
    """Main entity

    Attributes:
        first_name (str): First name
        last_name (str): Last name
        username (str): Common name for player
        date_of_birth (str): Birth date
        roles (List[Role]): List of roles that player could possibly play
        image (ImageField): Main image
        faceit (str): Faceit name
        twitter (str): Twitter name
        hltv (str): Hltv name
        email (str): Email
        nationality (List[Nationality]): List of nationalities that player has
    """

    first_name = models.CharField(max_length=256)
    last_name = models.CharField(max_length=256)
    username = models.CharField(max_length=50)
    date_of_birth = models.DateTimeField(blank=True, null=True)
    roles = models.ManyToManyField(Role, related_name="players")
    image = models.ImageField(upload_to="images/players", blank=True)
    faceit = models.CharField(max_length=255, null=True, blank=True)
    twitter = models.CharField(max_length=255, null=True, blank=True)
    hltv = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(null=True, blank=True, unique=True)
    nationality = models.ManyToManyField(Nationality, related_name="players")

    @property
    def age(self) -> int:
        """Method that calculates player's age from
        date of birth

        Returns:
            int: Player's age
        """
        today = datetime.today()
        return (
            today.year
            - self.date_of_birth.year
            - (
                (today.month, today.day)
                < (self.date_of_birth.month, self.date_of_birth.day)
            )
        )

    def __str__(self) -> str:
        """String representation of player

        Returns:
            str: Player username
        """
        return f"{self.username}"


class PlayerTeam(models.Model):
    """Representation of all teams for specific players.
    It has all teams that player has played with.

    Attributes:
        player (Player): Specific player
        team (Team): Team that player has played/is playing
        active (bool): Indicator whether is player currently in team
    """

    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name="teams")
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="players")
    active = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.player.username} - {self.team.name}"

    class Meta:
        """Meta class is used to provdie some metadata about class"""

        unique_together = (
            "player",
            "team",
        )
