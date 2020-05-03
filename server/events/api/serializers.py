import os
import uuid
import datetime
from django.core.files import File
from django.conf import settings
from rest_framework import serializers
from events.models import *


def get_current_user(context):
    return None
    user = context.get('request').user
    return None
    #return user

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

    def create(self, validated_data):
        validated_data['created_by'] = get_current_user(self.context)
        return Event.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.updated_by = get_current_user(self.context)
        
        for key in validated_data:
            setattr(instance, key, validated_data[key])

        instance.save()
        return instance


class EventSummarySerializer(serializers.ModelSerializer):

    class Meta:
        model = EventSummary
        fields = '__all__'

    def create(self, validated_data):

        # Set the created by user
        validated_data['created_by'] = get_current_user(self.context)

        # Create the summary Excel file
        uid = str(uuid.uuid4())
        now = datetime.datetime.now().strftime('%Y-%m-%d_%H%M%S')
        filename = '{}_summary.xlsx'.format(now)
        upload_dir = os.path.join(settings.MEDIA_ROOT, 'summaries')
        uid_filename = '{}.xlsx'.format(uid)
        uid_path = os.path.join(upload_dir, uid_filename)
        
        if not os.path.exists(upload_dir):
            os.makedirs(upload_dir)

        writer = pandas.ExcelWriter(uid_path, engine='xlsxwriter')
        num_cols = ['field1', 'field2', 'field3']
        events = Event.objects.all()
        event_serializer = EventSerializer(events, many=True)
        events_df = pandas.DataFrame.from_records(event_serializer.data)

        for year, year_df in events_df.groupby('year', sort=False):
            sheet_df = year_df.groupby('event_type')[num_cols].sum().reset_index()
            totals = sheet_df[num_cols].sum()
            totals['event_type'] = 'Total'
            sheet_df = sheet_df.append(totals, ignore_index=True)
            sheet_df.to_excel(writer, sheet_name=year, index=False)

        writer.save()

        # Create the EventSummary object
        summary = EventSummary.objects.create(**validated_data)

        with open(uid_path, 'rb') as f:
            summary.summary_file.save(filename, File(f))

        # Remove the temporary path
        os.remove(uid_path)

        return summary
