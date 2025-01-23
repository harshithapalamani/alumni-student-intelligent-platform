from django.db import models
from django.contrib.auth.models import User
import datetime

class Interest(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, blank=True)  
    college_name = models.CharField(max_length=100, choices=[
        ('College1', 'College1'),
        ('College2', 'College2'),
        # Add more college choices
    ], default='College1')
    interests = models.ManyToManyField(Interest, blank=True)
    graduation_year = models.PositiveIntegerField(null=True, blank=True)

    @property
    def is_alumni(self):
        current_year = datetime.date.today().year
        return self.graduation_year and self.graduation_year < current_year

    def __str__(self):
        return f'{self.user.username} Profile'