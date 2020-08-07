from django.urls import path
from . import views

urlpatterns = [
    path('nlp/<str:words>', views.nlp),
]
