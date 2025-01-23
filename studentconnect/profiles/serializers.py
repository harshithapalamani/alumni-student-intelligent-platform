from rest_framework import serializers
from .models import Profile, Interest

class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    interests = serializers.PrimaryKeyRelatedField(many=True, queryset=Interest.objects.all())
    interests_display = InterestSerializer(many=True, read_only=True) 

    class Meta:
        model = Profile
        fields = '__all__'
        read_only_fields = ('user',)