"""
URL configuration for starprj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from django.contrib import admin
from django.urls import include, path
from test1.views import index

urlpatterns = [
    path('', include('user.urls')),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),

    path('admin/', admin.site.urls),
    path('test1/', include('test1.urls')),
    
    path('index/', index, name='index'),
    path('create/',include('test1.urls')),
    
    path('ratings/', include('star_ratings.urls', namespace='ratings')),

# 방법 4
    # path('test4/', include('test4.urls')),


# 방법3  위해서 추가 
    path('test3/', include('test3.urls')),

    # path('rate/<int:post_id>/<int:rating>/', views.rate),
    # path('', views.index('test3.urls')),
    # path('', views.index),
    
    
    #* 방법 5 유투브 보고 따라하기 
    #path('test5/', include('test5.urls')),
    
    
    
    path('test6/', include('test6.urls')),
    
]
# + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) # 방법 3 위해서 추가 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
