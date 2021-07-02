from rest_framework import serializers
from .models import contact_form,participation_form
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
            model = contact_form
            fields = ('id', 'name', 'phone_number','email','message')


class ParticipationSerializer(serializers.ModelSerializer):
    class Meta:
            model = participation_form
            fields = ('id', 'name', 'phone_number','email','current','institute','doubt','subscribe')
            
