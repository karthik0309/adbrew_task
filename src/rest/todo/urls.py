from .api_views import *
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'todos', TodoListView.as_view(), basename='todos')
router.register(r'todos/<int:pk>/', TodoDetail.as_view())


urlpatterns = router.urls