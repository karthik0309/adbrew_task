from .api_views import *
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'todos', TodoListView, basename='todos')


urlpatterns = router.urls