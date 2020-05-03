from django.urls import path
from accounts.api.views import *


urlpatterns = [
    path('', UserListCreateAPIView.as_view(), name='user-lc'),
    path('<int:pk>/', UserRetrieveUpdateDestroyAPIView.as_view(), name='user-rud'),
]
