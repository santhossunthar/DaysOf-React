"""app URL Configuration
"""

from django.contrib import admin
from django.urls import path
from .views import HomeView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', HomeView.getHomeView),
]
