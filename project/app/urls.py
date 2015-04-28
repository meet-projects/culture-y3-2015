from django.conf.urls import patterns, url
from django.views.generic import TemplateView

from app import views

urlpatterns = patterns('',
    url(r'^home/$', views.home, name='home'),
    url(r'^palestine/$', views.palestine, name='palestine'),
    url(r'^israel/$', views.israel, name='israel'),
    url(r'^$', views.index, name='index'),


)
