from django.shortcuts import render
from .models import Note
from .serializers import Noteserializers
from rest_framework import viewsets

# Create your views here.
class Noteview(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = Noteserializers