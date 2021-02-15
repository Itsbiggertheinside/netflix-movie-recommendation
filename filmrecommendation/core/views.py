import requests
from django.shortcuts import get_object_or_404, render
from django.urls import reverse, reverse_lazy
from django.views.generic import View, FormView, DetailView
from .forms import FilmRecommendationForm
from .models import SearchParameters

# Create your views here.
class RecommendedFilmView(FormView):
    template_name = 'core/index.html'
    form_class = FilmRecommendationForm
    movie_search_id = int()

    def form_valid(self, form):
        movie = form.save()
        self.movie_search_id = int(movie.id)
        return super(RecommendedFilmView, self).form_valid(form)

    def get_success_url(self, **kwargs):
        return reverse('search-film-response', kwargs={'id': self.movie_search_id})


def movie_search_response(request, id=None):
    movie = get_object_or_404(SearchParameters, id=id)

    url = 'https://api.themoviedb.org/3/discover/movie?api_key='
    api_key = '629b72f9bf534bf18273b2a0538fd108'
    parameters = '&language=tr&sort_by=popularity.desc&with_watch_providers={0}&with_genres={1}&with_original_language={2}&vote_average.gte={3}' \
                .format(movie.platform, movie.genre_id, movie.language, movie.score)

    response_page1 = requests.get(url + api_key + parameters + '&page=1').json()
    response_page2 = requests.get(url + api_key + parameters + '&page=2').json()
    response_page3 = requests.get(url + api_key + parameters + '&page=3').json()
    response_page4 = requests.get(url + api_key + parameters + '&page=4').json()
    response_page5 = requests.get(url + api_key + parameters + '&page=5').json()

    response = [response_page1, response_page2, response_page3, response_page4, response_page5]

    return render(request, 'core/response.html', {'response': response})