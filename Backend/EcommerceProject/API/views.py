from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from EcommerceApp.models import *


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_details(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductsSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def womenproduct_list(request):
    products = WomenProduct.objects.all()
    serializer = WomenProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def womenproduct_details(request, pk):
    product = WomenProduct.objects.get(id=pk)
    serializer = WomenProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def kidsproduct_list(request):
    products = KidsProduct.objects.all()
    serializer = KidsProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def kidsproduct_details(request, pk):
    product = KidsProduct.objects.get(id=pk)
    serializer = KidsProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def menproduct_list(request):
    products = MenProduct.objects.all()
    serializer = MenProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def menproduct_details(request, pk):
    product = MenProduct.objects.get(id=pk)
    serializer = MenProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def watchproduct_list(request):
    products = WatchProduct.objects.all()
    serializer = WatchProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def watchproduct_details(request, pk):
    product = WatchProduct.objects.get(id=pk)
    serializer = WatchProductSerializer(product)
    return Response(serializer.data)


@api_view(['POST'])
def register_user(request):
    serializer = RegisterFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registered successfully!"}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_user(request):
    mobile = request.data.get('mobile')
    password = request.data.get('password')
    try:
        user = RegisterForm.objects.get(mobile=mobile, password=password)
        return Response({"message": "Login successful!", "username": user.username}, status=200)
    except RegisterForm.DoesNotExist:
        return Response({"message": "Invalid mobile or password!"}, status=401)