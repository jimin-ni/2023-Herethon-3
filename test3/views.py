from test3.models import Post, Rating
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from user.models import User
from .models import User_modle

# Create your views here.
def indexs(request: HttpRequest) -> HttpResponse:
        
    posts = Post.objects.all()
    for post in posts:
        rating = Rating.objects.filter(post=post, user=request.user).first()
        post.user_rating = rating.rating if rating else 0
    
    return render(request, "indexs.html", { "posts": posts })
    # user 앱에 있는 user 정보 가져오기 성공
    
#     #* user 정보 가져옴
# def detail(request): 
#     users = User.objects.all()
#     return render(request, 'test6.html', {"users": users} )
    


def rate(request: HttpRequest, post_id: int, rating: int) -> HttpResponse:
    post = Post.objects.get(id=post_id)    
    Rating.objects.filter(post=post, user=request.user).delete()
    post.rating_set.create(user=request.user, rating=rating)
    return indexs(request)