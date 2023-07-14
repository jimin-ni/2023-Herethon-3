from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

from .forms import UserForm, ChangeInfoForm
from django.contrib.auth.forms import PasswordChangeForm

from django.contrib.auth.decorators import login_required


# Create your views here.
# 메인, 로그인/회원가입 창
def main(request):
    return render(request, 'user/main.html')

def complete(request):
    return render(request, 'user/complete.html')

# 세계지도
@login_required
def world(request):
    return render(request, 'user/world.html')

# 회원가입
def join(request):
    if request.method == "POST":
        print(request.POST)
        form = UserForm(request.POST)
        if form.is_valid():
            user_account = form.save(commit=False)
            user_id = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user_id, password=raw_password)
            if user is not None:
                login(request, user)
            user_account.save()
            return redirect('/world') # 회원가입 후 메인으로 이동
    else:
        form = UserForm()
    return render(request, 'user/join.html', {'form':form})

# 마이페이지
@login_required
def mypage(request):
    if request.method == "GET":
        data = {'nickname': request.user.nickname, 'profileImg': request.user.profileImg}
        return render(request, 'user/mypage.html')

# 개인정보 수정 (닉네임, 아이디, 이메일)
@login_required
def change_info(request):
    if request.method == "POST":
        pass

    else:
        form = ChangeInfoForm(instance=request.user)
    return render(request, 'user/change-my.html', {'form':form})

# 비밀번호 수정 (추가 템플릿있어야 구현 가능)
@login_required
def change_password(request):
    if request.method == "POST":
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            form.save()
            return redirect('/mypage')
    else:
        form = PasswordChangeForm(request.user)

    return render(request, 'user/change-pw.html', {'form':form})

