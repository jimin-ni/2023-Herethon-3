from test1 import views
from django.urls import path, include
app_name = 'test1'

urlpatterns = [
    # path(사용자의 요청 , 내가 연결할 view의 함수), 이름 붙여주기
    # path('', views.index, name='index' ),    # '' = localhost/test1/
    
    # crud
    path("", views.index, name="index"),
    path("create/", views.create, name='create'),
    path("detail/<int:id>", views.detail, name="detail"),
    path("update/<int:id>", views.update, name="update"),
    path("delete/<int:id>", views.delete, name="delete"),
    path("example/", views.RateList, name="example"),
    path('ratings/', include('star_ratings.urls', namespace='ratings')),
    path('reviewsTest/', views.reviewTemplates, name='reviewsTest'),
    
    
    
    path('reviews/', views.review_list, name='review_list'),


]
