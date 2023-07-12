from django.db import models


class APIRequest(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    task = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
