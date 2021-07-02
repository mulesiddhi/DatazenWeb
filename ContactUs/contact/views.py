from django.shortcuts import render
from rest_framework import generics
from .models import contact_form,participation_form
from .serializers import ContactSerializer,ParticipationSerializer


from django.views.generic import ListView

class ContactListView(ListView):
    model = contact_form
    template_name = 'home.html'

class ContactAll(generics.ListAPIView):
    queryset = contact_form.objects.all()
    serializer_class = ContactSerializer

class ContactOne(generics.RetrieveAPIView):
    queryset = contact_form.objects.all()
    serializer_class = ContactSerializer

class PutContact(generics.RetrieveUpdateDestroyAPIView):
    queryset = contact_form.objects.all()
    serializer_class = ContactSerializer

class PostContact(generics.ListCreateAPIView):
    queryset = contact_form.objects.all()
    serializer_class = ContactSerializer



class ParticipationAll(generics.ListAPIView):
    queryset = participation_form.objects.all()
    serializer_class = ParticipationSerializer

class ParticipationOne(generics.RetrieveAPIView):
    queryset = participation_form.objects.all()
    serializer_class = ParticipationSerializer

class PutParticipation(generics.RetrieveUpdateDestroyAPIView):
    queryset = participation_form.objects.all()
    serializer_class = ParticipationSerializer

class PostParticipation(generics.ListCreateAPIView):
    queryset = participation_form.objects.all()
    serializer_class = ParticipationSerializer
