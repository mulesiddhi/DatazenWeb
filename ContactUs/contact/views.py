from django.shortcuts import render
from rest_framework import generics
from .models import contact_form,participation_form
from .serializers import ContactSerializer,ParticipationSerializer
import csv
import sqlite3
from django.http.response import JsonResponse
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST


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


def get_data(request):
    conn = sqlite3.connect("db.sqlite3")
    conn.text_factory = str ## my current (failed) attempt to resolve this
    cur = conn.cursor()

    data = cur.execute("SELECT * FROM contact_contact_form")

    with open('output.csv', 'w') as f:
        writer = csv.writer(f)
        writer.writerow(['name','phone_number','email','message'])
        writer.writerows(data)


    return JsonResponse({"Data Downloaded":":)"},status=HTTP_200_OK)
