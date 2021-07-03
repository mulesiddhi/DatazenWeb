
from django.urls import path
from .views import ContactListView
from .views import ContactAll, ContactOne,PutContact,PostContact,ParticipationAll,ParticipationOne,PutParticipation,PostParticipation,get_data
urlpatterns = [
path('a', ContactListView.as_view(), name='home'),

path('contact/', ContactAll.as_view()),
path('put/<int:pk>/',PutContact.as_view()),
path('<int:pk>/', ContactOne.as_view()),
path('post/',PostContact.as_view()),

 path('Participation/', ParticipationAll.as_view()),
 path('put/Particiapation/<int:pk>/',PutParticipation.as_view()),
 path('Particiapation/<int:pk>/', ParticipationOne.as_view()),
 path('post/Participation',PostParticipation.as_view()),
 path('get_data/',get_data)


]
