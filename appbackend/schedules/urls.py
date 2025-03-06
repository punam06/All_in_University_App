from django.urls import path, include
from rest_framework import routers
from .views import FacultyViewSet, ClassViewSet, StudentViewSet, AssignmentViewSet, ExamViewSet

router = routers.DefaultRouter()
router.register(r'faculties', FacultyViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'students', StudentViewSet)
router.register(r'assignments', AssignmentViewSet)
router.register(r'exams', ExamViewSet)

urlpatterns = [
    path('', include(router.urls)),
]