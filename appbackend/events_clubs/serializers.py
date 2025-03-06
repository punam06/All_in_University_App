# events_clubs/serializers.py
from rest_framework import serializers
from .models import Event, Club
from schedules.serializers import StudentSerializer # Reusing StudentSerializer

class EventSerializer(serializers.ModelSerializer):
    rsvp_students = StudentSerializer(many=True, read_only=True) # Display RSVP students when fetching event

    class Meta:
        model = Event
        fields = '__all__'

class ClubSerializer(serializers.ModelSerializer):
    members = StudentSerializer(many=True, read_only=True) # Display club members when fetching club

    class Meta:
        model = Club
        fields = '__all__'