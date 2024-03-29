"""
URL configuration for TaskMG project.

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
from django.contrib import admin
from django.urls import path
from ToDo.views import add_todo_task, get_todo_task, update_todo_task, delete_todo_task

urlpatterns = [
    path('api/get/', get_todo_task, name='get_todo_task'),
    path('api/add/', add_todo_task, name='add_todo_task'),
    path('api/update/', update_todo_task, name='update_todo_task'),
    path('api/delete/', delete_todo_task, name='delete_todo_task')
]
