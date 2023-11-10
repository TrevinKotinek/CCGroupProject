from django.db import models

# Create your models here.
class Book(models.Model):
    isbn = models.CharField(max_length=30, unique= True)
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    date = models.CharField(max_length=30)

    def __str__(self):
        return (self.isbn + ": " + self.title + " by " + self.author + " (" + self.date + ")\n")
    
class Description(models.Model):
    isbn = models.CharField(max_length=30)
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    summary = models.CharField(max_length=150)
    rating = models.CharField(max_length=30)

    def __str__(self):
        return (self.isbn + ": " + self.title + " by " + self.author + "\nRated: " + self.rating +"\nSummary: " + self.summary + "\n")
