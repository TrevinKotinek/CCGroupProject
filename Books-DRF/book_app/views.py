from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def indexPageView(request) :
    return render(request, 'bookstore/index.html')

def showHome(request) :
    data = Book.objects.all()
    context = {"books" : data}
    return render(request, 'bookstore/home.html', context)

def showDescription(request) :
    data = Description.objects.all()
    context = {"descriptions" : data}
    return render(request, 'bookstore/desc.html', context)
