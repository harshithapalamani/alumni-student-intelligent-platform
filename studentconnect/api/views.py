from django.shortcuts import redirect
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializers
from rest_framework.permissions import IsAuthenticated, AllowAny
from allauth.socialaccount.models import SocialAccount, SocialToken
from django.contrib.auth.decorators import login_required
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


User = get_user_model()


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [AllowAny]


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
@login_required
def google_login_callback(request):
    user = request.user
    
    social_accounts = SocialAccount.objects.filter(user=user)
    print('Social Account for User:',social_accounts)

    social_account = social_accounts.first()

    if not social_account:
        print('No Social Account found:',user)
        return redirect('http://localhost:5175/login/callback/?error=NoSocialAccountFound')
    token = SocialToken.objects.filter(account=social_account,account__provider='google').first()

    if token:
        print('google token found:',token)
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        return redirect(f'http://localhost:5175/login/callback/?access_token={access_token}')
    else:
        print('No google token found :',user)
        return redirect('http://localhost:5175/login/callback/?error=NoGoogleToken')
    
@csrf_exempt
def validate_google_token(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            google_access_token = data.get('access_token')
            print('google_access_token')

            if not google_access_token:
                return JsonResponse({'detail':'Access Token is missing'}, status=400)
            return JsonResponse({'valid':True})
        except json.JSONDecodeError:
            return JsonResponse({'detail':'Invalid JSON.'}, status=400)
    return JsonResponse({'detail':'Method Not Allowed'}, status=405)