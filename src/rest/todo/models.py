from django.db import models

class Todo(models.Model):
    id = models.AutoField(primary_key=True,serialize=True)
    name = models.CharField(max_length=70, blank=False)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return '{}'.format(str(self.name))