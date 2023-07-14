from django.urls import path
from . import views

app_name = 'test6'

urlpatterns = [
    path('review_star/', views.detail, name='star_review'),
    # path('review_star/', views.star_review, name='star_review'),
    path('submit_review/', views.submit_review, name='submit_review'),
    
]