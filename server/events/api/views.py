from rest_framework import generics
from rest_framework.response import Response
from django.http import HttpResponse
from events.models import *
from events.api.serializers import *


class EventListCreateAPIView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'pk'


class EventSummaryListCreateAPIView(generics.ListCreateAPIView):
    queryset = EventSummary.objects.all()
    serializer_class = EventSummarySerializer

#    def post(self, request, *args, **kwargs):
#        serializer = self.get_serializer_class()(data=request.data)
#        if serializer.is_valid():
#            obj = serializer.save()
#            response = Response(serializer.data)
#            response['Content-Disposition'] = 'attachment; filename="foo.xls"'
#            return response
#
#        return Response(serializer.errors)

