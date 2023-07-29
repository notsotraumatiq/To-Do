from django.db import models


class Task(models.Model):
    task = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
