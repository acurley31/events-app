from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static

#from event_entry.views import index

urlpatterns = [
#    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.api.urls')),
    path('api/events/', include('events.api.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#urlpatterns += [
#    re_path('^.*', index, name='index'),
#]
