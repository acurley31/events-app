from rest_framework import serializers
from accounts.models import User


class UserCreateSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(max_length=255, required=False)
    password = serializers.CharField(max_length=255, required=False)

    class Meta:
        model = User
        fields = (
            'id',
            'username', 
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active',
            'password',
            'password2',
        )

    def create(self, validated_data):
        password = validated_data.pop('password')
        password2 = validated_data.pop('password2')
        if password and password != password2:
            raise serializers.ValidationError('Passwords must match')

        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        if 'password' in validated_data and 'password2' in validated_data:
            password = validated_data.pop('password')
            password2 = validated_data.pop('password2')
            if password and password != password2:
                raise serializers.ValidatorError('Passwords must match')
            instance.set_password(password)

        for key in validated_data:
            setattr(instance, key, validated_data[key])
        
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active',
        )

