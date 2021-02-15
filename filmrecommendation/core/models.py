from django.db import models

# Create your models here.
class SearchParameters(models.Model):

    platform = models.CharField(max_length=15, null=True, blank=True)
    genre_id = models.CharField(max_length=8)
    language = models.CharField(max_length=3)
    score = models.CharField(max_length=5)
    searched_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.platform} - {self.genre_id} - {self.language} - {self.score}'