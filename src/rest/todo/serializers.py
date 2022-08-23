from .models import Todo
from rest_framework import serializers
from django.db.models import fields


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id','name','completed')