from django import forms
from .models import Profile, Interest

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['email', 'college_name', 'interests', 'graduation_year']
        widgets = {
            'interests': forms.CheckboxSelectMultiple,
        }