from rest_framework import serializers
from .models import Faculty, Class, Student, Assignment, Exam

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class ClassSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer(read_only=True) # To display faculty details when fetching class
    class Meta:
        model = Class
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = '__all__'