from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=70, blank=False)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return '{}'.format(str(self.name))