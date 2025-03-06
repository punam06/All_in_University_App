from django.urls import path
from . import views

urlpatterns = [
    # Menus
    path('api/menus/', views.MenuListAPI.as_view()),
    path('api/menus/<int:menu_id>/meals/', views.MenuMealsAPI.as_view()),

    # Meals
    path('api/meals/<int:pk>/', views.MealDetailAPI.as_view()),

    # Orders
    path('api/orders/', views.OrderCreateAPI.as_view()),
    path('api/orders/<int:pk>/', views.OrderDetailAPI.as_view()),
]