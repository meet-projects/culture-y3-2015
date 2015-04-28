from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'app/index.html', {})
def home(request):
	return render(request, 'app/home.html', {})
def palestine(request):
	return render(request, 'app/palestine.html', {})
def israel(request):
	return render(request, 'app/israel.html', {})