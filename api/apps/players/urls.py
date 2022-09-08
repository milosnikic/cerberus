from django.urls import include, path

urlpatterns = [path("v1/", include("apps.players.api.v1.urls"))]
