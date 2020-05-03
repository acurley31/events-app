from django.urls import path
from events.api.views import *


urlpatterns = [
    path('', EventListCreateAPIView.as_view(), name='event-lc'),
    path('<int:pk>/', EventRetrieveUpdateDestroyAPIView.as_view(), name='event-rud'),
    path('summaries/', EventSummaryListCreateAPIView.as_view(), name='event-summary-lc'),
]
