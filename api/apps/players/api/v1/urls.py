from django.urls import path

from apps.players.api.v1.views import NationalitiesListAPI, PlayersListAPI, RolesListAPI

urlpatterns = [
    path(
        "",
        view=PlayersListAPI.as_view(),
        name="get-players",
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
