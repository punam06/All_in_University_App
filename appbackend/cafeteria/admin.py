from django.contrib import admin
from .models import Cafeteria, Menu, Meal, Order

admin.site.register(Cafeteria)
admin.site.register(Menu)
admin.site.register(Meal)
admin.site.register(Order)