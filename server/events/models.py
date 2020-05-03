import pandas
from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Event(models.Model):
    year = models.CharField(max_length=4)
    event_type = models.CharField(max_length=255)
    description = models.TextField()
    field1 = models.FloatField()
    field2 = models.FloatField()
    field3 = models.FloatField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='events_created')
    updated_by = models.ForeignKey(User,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='events_updated')

    class Meta:
        ordering = ('-date_created', )

    def __str__(self):
        return '<Event: {}>'.format(self.pk)


class EventSummary(models.Model):
    summary_file = models.FileField(upload_to='summaries/',
        blank=True,
        null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='summaries')

    class Meta:
        ordering = ('-date_created', )

    def __str__(self):
        return '<EventSummary: {}>'.format(self.pk)
