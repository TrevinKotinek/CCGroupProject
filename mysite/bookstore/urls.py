from django.urls import path
from .views import *
urlpatterns = [
    # path("", indexPageView, name="index"),
    path("", showHome, name="home"),
    path("description", showDescription, name="description")
]