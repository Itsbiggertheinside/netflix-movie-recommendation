from django.urls import path
from .views import RecommendedFilmView, MovieResponseDetailView

urlpatterns = [
    
    path('', RecommendedFilmView.as_view(), name='search-film'),
    path('movies/<int:id>/', MovieResponseDetailView.as_view(), name='search-film-response'),

]
