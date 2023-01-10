from django.urls import path

from apps.players.api.v1.views import (
    NationalitiesListAPI,
    PlayerRetrieveAPI,
    PlayersListAPI,
    RolesListAPI,
)

urlpatterns = [
    path(
        "",
        view=PlayersListAPI.as_view(),
        name="get-players",
    ),
    path(
        "<int:pk>",
        view=PlayerRetrieveAPI.as_view(),
        name="get-player",
    ),
    path(
        "nationalities",
        view=NationalitiesListAPI.as_view(),
        name="get-nationalities",
    ),
    path(
        "roles",
        view=RolesListAPI.as_view(),
        name="get-roles",
    ),
]
