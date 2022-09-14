from django.urls import path, re_path

from apps.players.api.v1.views import PlayersListAPI

urlpatterns = [
    path("", view=PlayersListAPI.as_view(), name="get-players"),
]
