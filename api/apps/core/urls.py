from django.urls import include, path

app_name = "core"

urlpatterns = [path("players/", include("apps.players.urls"))]
