from django.db import models

# Create your models here.
class SearchParameters(models.Model):

    platform = models.CharField(max_length=45)
    genre = models.CharField(max_length=45)
    language = models.CharField(max_length=3)
    score = models.CharField(max_length=5)
    searched_at = models.DateTimeField(auto_now_add=True)