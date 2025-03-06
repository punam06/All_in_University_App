# events_clubs/models.py
from django.db import models
from schedules.models import Student  # Reusing Student model

class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    date_time = models.DateTimeField()
    location = models.CharField(max_length=255, blank=True)
    organizer = models.CharField(max_length=255, blank=True) # Could be club or department name
    rsvp_students = models.ManyToManyField(Student, related_name='events_rsvped', blank=True) # Students who RSVP'd
    reminders_enabled = models.BooleanField(default=True) # Option to enable/disable reminders

    def __str__(self):
        return self.name

class Club(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    activities = models.TextField(blank=True) #  Briefly describe club activities
    contact_email = models.EmailField(blank=True)
    website_url = models.URLField(blank=True)
    members = models.ManyToManyField(Student, related_name='clubs_joined', blank=True)

    def __str__(self):
        return self.name