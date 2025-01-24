from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'profile', views.ProfileViewSet, basename='profile')
router.register(r'interests', views.InterestViewSet, basename='interests') 

urlpatterns = router.urls