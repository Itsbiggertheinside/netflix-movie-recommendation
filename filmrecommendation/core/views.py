from django.shortcuts import render
from django.views.generic import FormView
from core.forms import FilmRecommendationForm
import requests

# Create your views here.
class RecommendedFilmView(FormView):
    template_name = 'core/index.html'
    form_class = FilmRecommendationForm
    success_url = '/search-film/'
    
    def form_valid(self, form):
        movie = form.save()
        print(movie)
        return (RecommendedFilmView, self).form_valid(form)