from django.contrib import admin

from apps.players.models import Nationality, Player, PlayerTeam, Role, Team

admin.site.register(Player)
admin.site.register(Team)
admin.site.register(Role)
admin.site.register(PlayerTeam)
admin.site.register(Nationality)
