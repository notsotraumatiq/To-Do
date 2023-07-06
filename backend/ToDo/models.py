from django.db import models


class ToDoList(models.Model):
    tasks = models.JSONField()

    def __str__(self):
        return f'ToDo List #{self.pk}'
