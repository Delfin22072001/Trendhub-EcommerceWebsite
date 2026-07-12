from rest_framework import serializers
from EcommerceApp.models import *

class ProductsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product  
    fields = "__all__"

class WomenProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = WomenProduct   
    fields = "__all__"

class KidsProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = KidsProduct   
    fields = "__all__"
    
class MenProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = MenProduct   
    fields = "__all__"

class WatchProductSerializer(serializers.ModelSerializer):
  class Meta:
    model =  WatchProduct   
    fields = "__all__"
    
    
class RegisterFormSerializer(serializers.ModelSerializer):
  class Meta:
    model =  RegisterForm   
    fields = "__all__"