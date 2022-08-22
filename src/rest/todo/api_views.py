from .models import Todo
from .serializers import TodoSerializer
from rest_framework import viewsets
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']

class TodoListView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    http_method_names = ['post','get','put','delete']

    def get_queryset(self):
        return Todo.objects.filter()


