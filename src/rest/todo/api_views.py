from .models import Todo
from .serializers import TodoSerializer
from rest_framework import viewsets

class TodoListView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    http_method_names = ['post','get','put','delete']

    def get_queryset(self):
        return Todo.objects.filter()


