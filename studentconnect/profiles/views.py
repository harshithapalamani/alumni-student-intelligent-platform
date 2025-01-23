from rest_framework import viewsets, permissions
from .models import Profile
from rest_framework import status
from .serializers import ProfileSerializer
from .serializers import InterestSerializer
from .models import Interest
from rest_framework.response import Response

from rest_framework import viewsets, permissions
from .models import Profile
from .serializers import ProfileSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user) 

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer