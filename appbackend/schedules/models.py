from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    department = models.CharField(max_length=255, blank=True)
    office_location = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class Class(models.Model):
    name = models.CharField(max_length=255)
    course_code = models.CharField(max_length=20)
    description = models.TextField(blank=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True, blank=True, related_name='classes')
    schedule_details = models.TextField(blank=True) # e.g., "Mon 10:00 AM - 11:30 AM, Room 101"
    students = models.ManyToManyField('Student', related_name='classes', blank=True) # Students enrolled

    def __str__(self):
        return self.name

class Student(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Assignment(models.Model):
    class_name = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='assignments')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    deadline = models.DateTimeField()

    def __str__(self):
        return self.title

class Exam(models.Model):
    class_name = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='exams')
    name = models.CharField(max_length=255)
    date_time = models.DateTimeField()
    location = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name