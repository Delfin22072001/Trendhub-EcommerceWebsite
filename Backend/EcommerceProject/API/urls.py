from django.urls import path
from .views import *  

urlpatterns=[
  path('products/', product_list),
  path('products/<int:pk>/', product_details),
  path('womenproducts/', womenproduct_list),
  path('womenproducts/<int:pk>/', womenproduct_details),
  path('kidsproducts/', kidsproduct_list),
  path('kidsproducts/<int:pk>/', kidsproduct_details),
  path('menproducts/', menproduct_list),
  path('menproducts/<int:pk>/', menproduct_details),
  path('watchproducts/', watchproduct_list),
  path('watchproducts/<int:pk>/', watchproduct_details),
  path('register/', register_user),
  path('login/', login_user), 
]