from django.urls import path
from .views import RecommendedFilmView

urlpatterns = [
    
    path('', RecommendedFilmView.as_view(), name='search-film'),

]
