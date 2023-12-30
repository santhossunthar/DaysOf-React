from django.shortcuts import render

class HomeView:
    def getHomeView(request):
        return render(request, 'app/index.html')