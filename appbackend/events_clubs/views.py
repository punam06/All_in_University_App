# events_clubs/views.py
from rest_framework import viewsets
from .models import Event, Club
from .serializers import EventSerializer, ClubSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer