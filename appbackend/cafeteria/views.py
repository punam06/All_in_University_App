from rest_framework import generics, permissions
from .models import Menu, Meal, Order
from .serializers import MenuSerializer, MealSerializer, OrderSerializer


# GET: List all menus (e.g., /api/menus/)
class MenuListAPI(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = [permissions.AllowAny]  # Public access


# GET: Meals in a specific menu (e.g., /api/menus/1/meals/)
class MenuMealsAPI(generics.ListAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        menu_id = self.kwargs['menu_id']
        return Meal.objects.filter(menu__id=menu_id)


# GET: Meal details (e.g., /api/meals/1/)
class MealDetailAPI(generics.RetrieveAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer


# POST: Create an order (e.g., /api/orders/)
class OrderCreateAPI(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        # Attach logged-in user to the order
        serializer.save(user=self.request.user)


# GET: Order details (e.g., /api/orders/1/)
class OrderDetailAPI(generics.RetrieveAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        # Users can only see their own orders
        return Order.objects.filter(user=self.request.user)