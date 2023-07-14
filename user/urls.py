from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

app_name = 'user'

urlpatterns = [
    path('', views.main, name='main'),
    path('join/', views.join, name='join'),
    path('login/', auth_views.LoginView.as_view(template_name='user/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('world/', views.world, name='world'),
    path('world/complete.html', views.complete, name ='complete'),
    path('mypage/', views.mypage, name='mypage'),
    path('world/mypage.html', views.mypage, name ='mypage'),
    path('change/', views.change_info, name='change_info'),
    path('change/password/', views.change_password, name='change_password'),

]
