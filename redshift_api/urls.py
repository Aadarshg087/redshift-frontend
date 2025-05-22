from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict_redshift, name='predict_redshift'),
] 