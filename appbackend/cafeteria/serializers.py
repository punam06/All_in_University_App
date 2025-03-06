from rest_framework import serializers
from .models import Menu, Meal, Order


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['id', 'name', 'description', 'price', 'calories', 'allergens', 'is_available']


class MenuSerializer(serializers.ModelSerializer):
    meals = MealSerializer(many=True, read_only=True)  # Show nested meals

    class Meta:
        model = Menu
        fields = ['id', 'date', 'meals']


class OrderSerializer(serializers.ModelSerializer):
    meal = MealSerializer(read_only=True)  # Show meal details in response
    meal_id = serializers.IntegerField(write_only=True)  # For input

    class Meta:
        model = Order
        fields = ['id', 'meal', 'meal_id', 'quantity', 'status', 'pickup_time']

    def validate(self, data):
        # Example validation: Check meal availability
        meal = Meal.objects.get(id=data['meal_id'])
        if not meal.is_available:
            raise serializers.ValidationError("Meal is not available")
        return data