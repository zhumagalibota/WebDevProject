from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView

from .models import *
from .serializers import *


# MEMBERS VIEWS

@api_view(["GET", "POST"])
def members_list(request):
    if request.method == "GET":
        members = Members.objects.all()
        serializer = MembersSerializer(members, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = MembersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def members_detail(request, id):
    try:
        member = Members.objects.get(id=id)
    except Members.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == "GET":
        serializer = MembersSerializer(member)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = MembersSerializer(
            instance=member,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        member.delete()
        return Response({"deleted": True})


def members_profile(request, id):
    try:
        member = Members.objects.get(id=id)
        profile = Profile.objects.filter(members=member)
        profile_json = [p.to_json() for p in profile]

    except Members.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(profile_json, safe=False)


# COMMENTS VIEWS
@api_view(["GET", "POST"])
def comments_list(request):
    if request.method == "GET":
        comments = Comments.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = SimpleCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def comments_detail(request, id):
    try:
        comment = Comments.objects.get(id=id)
    except Comments.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == "GET":
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CommentSerializer(
            instance=comment,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        comment.delete()
        return Response({"deleted": True})


# POSTS VIEWS
class PostsListAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        posts = Posts.objects.all()
        serializer = PostsSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class PostsDetailAPIView(APIView):
    def get_object(self, id):
        try:
            post = Posts.objects.get(id=id)
            return post
        except Posts.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        post = self.get_object(id)
        serializer = PostsSerializer(post)
        return Response(serializer.data)

    def put(self, request, id):
        post = self.get_object(id)
        serializer = PostsSerializer(
            instance=post,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        post = self.get_object(id)
        post.delete()
        return Response({"deleted": True})


@api_view()
def posts_comments(request, id):
    try:
        post = Posts.objects.get(id=id)
        comments = Comments.objects.filter(post=post)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    except Posts.DoesNotExist as e:
        return Response({'error': str(e)})


# PROFILE VIEWS
class ProfileListAPIView(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class ProfileDetailAPIView(mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin,
                            generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request, pk=None):
        return self.retrieve(request, pk)

    def put(self, request, pk=None):
        return self.update(request, pk)

    def delete(self, request, pk=None):
        return self.destroy(request, pk)

# FRIENDS VIEW

class FriendsListAPIVIEW(generics.ListCreateAPIView):
    queryset = Friends.objects.all()
    serializer_class = FriendsSerializer


class FriendsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Friends.objects.all()
    serializer_class = FriendsSerializer


def members_friends(request, id):
    try:
        member = Members.objects.get(id=id)
        friends = Friends.objects.filter(nickname=member)
        friends_json = [f.to_json() for f in friends]
    except Members.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(friends_json, safe=False)


# NOTIFICATIONS VIEW

class NotificationsListAPIVIEW(generics.ListCreateAPIView):
    queryset = Notifications.objects.all()
    serializer_class = NotificationsSerializer

# VIEWS USING MANAGER MODEL
def notifications_by_member(request, id):
    # Using the custom manager method
    notifs = Notifications.notifications.by_member(id)
    serializer = NotificationsSerializer(notifs, many=True)
    response_data = {
        'message': f'Notifications count: {notifs.count()}',
        'data': serializer.data
    }
    return JsonResponse(response_data, safe=False)


def notifications_by_category(request, category):
    # Using the custom manager method
    notifs = Notifications.notifications.by_category(category)
    serializer = NotificationsSerializer(notifs, many=True)
    response_data = {
        'message': f'Notifications for category "{category}": {notifs.count()}',
        'data': serializer.data
    }

    return JsonResponse(response_data, safe=False)
