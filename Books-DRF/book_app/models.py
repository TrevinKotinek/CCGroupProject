from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from djmoney.models.fields import MoneyField


# class StreamPlatform(models.Model):
#     name = models.CharField(max_length=30)
#     about = models.CharField(max_length=150)
#     website = models.URLField(max_length=100)

#     def __str__(self):
#         return self.name


class Book(models.Model):
    isbn = models.CharField(max_length=10, default='0000000000000000', unique=True)
    title = models.CharField(max_length=400)
    #price = models.DecimalField(max_digits=5, decimal_places=2, default=0.00, null=False)   
    price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD', default=0.00, null=False)
    summary = models.TextField()
   
    author = models.CharField(max_length=200)
    # platform = models.ForeignKey(StreamPlatform, on_delete=models.CASCADE, related_name="watchlist")
    # active = models.BooleanField(default=True)
    avg_rating = models.FloatField(default=0, editable=False)
    number_rating = models.IntegerField(default=0, editable=False)
    # created = models.DateTimeField(auto_now_add=True)
    
    #image = models.ImageField(upload_to='book_images/', null=True)

    def __str__(self):
        return self.title
    
class Description(models.Model):
    isbn = models.CharField(max_length=30)
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    summary = models.CharField(max_length=150)
    rating = models.CharField(max_length=30)

    def __str__(self):
        return (self.isbn + ": " + self.title + " by " + self.author + "\nRated: " + self.rating +"\nSummary: " + self.summary + "\n")


class Review(models.Model):
    review_user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    description = models.CharField(max_length=200, null=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="reviews")
    active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.rating) + " | " + self.book.title + " | " + str(self.review_user)