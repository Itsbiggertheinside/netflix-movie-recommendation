from django import forms
from .models import SearchParameters

class FilmRecommendationForm(forms.ModelForm):

    class Meta:
        model = SearchParameters
        fields = ('platform', 'genre', 'language', 'score', )
        widgets = {
            'platform': forms.TextInput(attrs={'id': 'platform'}),
            'genre': forms.TextInput(attrs={'id': 'genre'}),
            'language': forms.TextInput(attrs={'id': 'language'}),
            'score': forms.TextInput(attrs={'id': 'score'}),
        }
