from django import forms

class FilmRecommendationForm(forms.Form):

    platform = forms.CharField(max_length=45, widget=forms.TextInput(attrs={'id': 'platform'}))
    genre = forms.CharField(max_length=45, widget=forms.TextInput(attrs={'id': 'genre'}))
    language = forms.CharField(max_length=45, widget=forms.TextInput(attrs={'id': 'language'}))
    score = forms.IntegerField(min_value=0, max_value=10, widget=forms.TextInput(attrs={'id': 'score'}))