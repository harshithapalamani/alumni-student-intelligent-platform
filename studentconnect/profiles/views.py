# from rest_framework import viewsets, permissions
# from .models import Profile
# from rest_framework import status
# from .serializers import ProfileSerializer
# from .serializers import InterestSerializer
# from .models import Interest
# from rest_framework.response import Response
# from .models import Profile

# class ProfileViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     serializer_class = ProfileSerializer

#     def get_queryset(self):
#         return Profile.objects.filter(user=self.request.user)
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user) 
#         print(f"Creating profile for user: {self.user.id}")  # Print user ID for debugging

#         if not Profile.objects.filter(user=self.user).exists():
#             serializer = self.get_serializer(data=self.request.data)
#             serializer.is_valid(raise_exception=True)
#             serializer.save(user=user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'error': 'A profile already exists for this user.'}, status=status.HTTP_400_BAD_REQUEST)


# class InterestViewSet(viewsets.ModelViewSet):
#     queryset = Interest.objects.all()
#     serializer_class = InterestSerializer



from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Profile, Interest
from .serializers import ProfileSerializer, InterestSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        # Only fetch the profile for the authenticated user
        return Profile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Check if the user already has a profile
        if Profile.objects.filter(user=self.request.user).exists():
            raise ValidationError({'error': 'A profile already exists for this user.'})
        # Create the profile if it doesn't exist
        serializer.save(user=self.request.user)


class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
