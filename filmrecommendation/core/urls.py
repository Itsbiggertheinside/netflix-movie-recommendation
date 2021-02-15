from django.urls import path
from core.views import RecommendedFilmView

urlpatterns = [
    
    path('', RecommendedFilmView.as_view(), name='search-film'),

]
