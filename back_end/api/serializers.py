from rest_framework import serializers
from sqlparse.sql import Comment

from .models import *


# PROFILE SERIALIZER
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


# POSTS SERIALIZERS
class PostsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    url = serializers.CharField()
    description = serializers.CharField()
    hashtag = serializers.CharField()
    members_id = serializers.IntegerField(read_only=True)

    def create(self, validated_data):
        instance = Posts.objects.create(
            url=validated_data.get("url"), description=validated_data.get("description"),
            hashtag=validated_data.get("hashtag"), members_id=validated_data.get("members_id")
        )
        return instance

    def update(self, instance, validated_data):
        instance.url = validated_data.get("url")
        instance.description = validated_data.get("description")
        instance.hashtag = validated_data.get("hashtag")
        instance.save()
        return instance


class PostsMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("url",)


# MEMBERS SERIALIZERS
class MembersSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nickname = serializers.CharField()
    ava_url = serializers.CharField()
    posts = PostsMembersSerializer(many=True, read_only=True)

    def create(self, validated_data):
        instance = Members.objects.create(
            nickname=validated_data.get("nickname"), ava_url=validated_data.get("ava_url")
        )
        return instance

    def update(self, instance, validated_data):
        instance.nickname = validated_data.get("nickname")
        instance.ava_url = validated_data.get("ava_url")
        instance.save()
        return instance


class SimpleMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ("nickname", "ava_url")


# COMMENTS SERIALIZERS
class CommentSerializer(serializers.ModelSerializer):
    members = SimpleMembersSerializer(read_only=True)

    class Meta:
        model = Comments
        fields = ("id", "text", "members", "post")


class SimpleCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = "__all__"


# FRIENDS SERIALIZERS
class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = "__all__"


class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = "__all__"
