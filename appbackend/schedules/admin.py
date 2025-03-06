from django.contrib import admin
from .models import Faculty, Class, Student, Assignment, Exam
# Register your models here.
admin.site.register(Faculty)
admin.site.register(Class)
admin.site.register(Student)
admin.site.register(Assignment)
admin.site.register(Exam)
