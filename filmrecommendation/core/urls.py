from django.urls import path
from .views import RecommendedFilmView, movie_search_response

urlpatterns = [
    
    path('', RecommendedFilmView.as_view(), name='search-film'),
    path('movies/<int:id>/', movie_search_response, name='search-film-response'),

]
