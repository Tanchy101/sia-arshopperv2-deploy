from django.urls import path
from .views import UserCreateView, LoginView, ProductView, ProductDetailView, UserDetailView, change_password, BeveragesView, JunkFoodsView

urlpatterns = [
    path('signup/', UserCreateView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('products/', ProductView.as_view(), name='products'),
    path('products/<str:barcode>/', ProductDetailView.as_view(), name='product_details'),
    path('beverages/', BeveragesView.as_view(), name='beverages'),
    path('junkfoods/', JunkFoodsView.as_view(), name='junkfoods'),
    path('user-details/<str:mobile_number>/', UserDetailView.as_view(), name='user-details'),
    path('change-password/<str:mobile_number>/', change_password, name='change-password'),
]
