from django.shortcuts import render

# Create your views here.
from django.contrib import messages
from django.shortcuts import render, redirect

# Create your views here.
from .forms import ReviewForm
from .models import ReviewRating, ReviewSub

from user.models import User


def star_review(request):
    reviews = ReviewRating.objects.all()

    return render(request, 'test6/test6.html', {'reviews':reviews})

def submit_review(request, location_id):
    url = request.META.get('HTTP_REFERER')
    if request.method == "POST":
        try:
            reviews = ReviewSub.objects.get(user_id=request.user.user_id, location_id=location_id)
            form = ReviewForm(request.POST, instance=reviews)
            form.save()
            messages.success(request, 'Update success!')
            return redirect(url)
        except ReviewRating.DoesNotExist:
            form = ReviewForm(request.POST)
            if form.is_valid():
                data = ReviewSub()
                data.star_danger = form.cleaned_data['star_danger']
                data.star_price = form.cleaned_data['star_price']
                data.star_traffic = form.cleaned_data['star_traffic']
                data.star_leisure = form.cleaned_data['star_leisure']
                data.star_food = form.cleaned_data['star_food']
                data.location_id = location_id
                data.user_id = request.user.user_id
                data.save()
                messages.success(request, 'Submit success!')
                return redirect(url)


def detail(request):
    users = User.objects.all()
    return render(request, 'test6/test6.html', {'users':users})