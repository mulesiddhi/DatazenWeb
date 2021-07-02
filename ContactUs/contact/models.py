from django.db import models





class contact_form(models.Model):
    name = models.CharField(max_length=250)
    phone_number = models.CharField(max_length=10)
    email = models.CharField(max_length=100)
    message = models.TextField()
    def __str__(self):
        return self.name


class participation_form(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)
    email = models.CharField(max_length=100)
    current= models.TextField()
    institute=models.CharField(max_length=100)
    doubt=models.TextField()
    subscribe=models.BooleanField(default=True)
    
