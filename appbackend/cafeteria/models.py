from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Cafeteria(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    opening_time = models.TimeField()
    closing_time = models.TimeField()

class Meal(models.Model):
    VEG = 'VEG'
    NON_VEG = 'NON_VEG'
    MEAL_TYPE_CHOICES = [
        (VEG, 'Vegetarian'),
        (NON_VEG, 'Non-Vegetarian'),
    ]

    cafeteria = models.ForeignKey(Cafeteria, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    meal_type = models.CharField(max_length=7, choices=MEAL_TYPE_CHOICES, default=VEG)
    calories = models.IntegerField()
    allergens = models.CharField(max_length=200, blank=True)  # e.g., "gluten, nuts"
    available_quantity = models.IntegerField(default=0)  # For pre-order tracking
    is_available = models.BooleanField(default=True)

class Menu(models.Model):
    cafeteria = models.ForeignKey(Cafeteria, on_delete=models.CASCADE)
    date = models.DateField()
    meals = models.ManyToManyField(Meal)

class Order(models.Model):
    PENDING = 'PENDING'
    CONFIRMED = 'CONFIRMED'
    CANCELLED = 'CANCELLED'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (CONFIRMED, 'Confirmed'),
        (CANCELLED, 'Cancelled'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=PENDING)
    pickup_time = models.DateTimeField()  # Time slot for order pickup
    created_at = models.DateTimeField(auto_now_add=True)