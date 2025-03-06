# events_clubs/urls.py
from django.urls import path, include
from rest_framework import routers
from .views import EventViewSet, ClubViewSet

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'clubs', ClubViewSet)

urlpatterns = [
    path('', include(router.urls)),
]