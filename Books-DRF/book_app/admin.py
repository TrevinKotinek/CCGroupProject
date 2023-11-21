from django.contrib import admin
from book_app.models import *

admin.site.register(Book)
admin.site.register(Description)
# admin.site.register(StreamPlatform)
admin.site.register(Review)