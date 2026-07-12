from django.db import models
from django.db import models

# Create your models here.
  
class Product(models.Model):
  name=models.CharField(max_length=20)
  price=models.IntegerField()
  description=models.TextField()
  image=models.ImageField(upload_to='index',null=True)
  alt=models.CharField(max_length=25)
  
  def __str__(self):
    return self.name
  

class KidsProduct(models.Model):
  name=models.CharField(max_length=20)
  price=models.IntegerField()
  description=models.TextField()
  image=models.ImageField(upload_to='index',null=True)
  alt=models.CharField(max_length=25)
  
  def __str__(self):
    return self.name
  
class MenProduct(models.Model):
  name=models.CharField(max_length=20)
  price=models.IntegerField()
  description=models.TextField()
  image=models.ImageField(upload_to='index',null=True)
  alt=models.CharField(max_length=25)

  def __str__(self):
    return self.name
  
class WomenProduct(models.Model):
  name=models.CharField(max_length=20)
  price=models.IntegerField()
  description=models.TextField()
  image=models.ImageField(upload_to='index',null=True)
  alt=models.CharField(max_length=25)

  def __str__(self):
    return self.name

class WatchProduct(models.Model):
  name=models.CharField(max_length=20)
  price=models.IntegerField()
  description=models.TextField()
  image=models.ImageField(upload_to='index',null=True)
  alt=models.CharField(max_length=25)

  def __str__(self):
    return self.name
 
class RegisterForm(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=8)
    mobile = models.IntegerField()

    def __str__(self):
        return self.username 


  


