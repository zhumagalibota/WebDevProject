from django.urls import path, re_path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import *

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('members/', members_list),
    path('members/<int:id>/', members_detail),
    path('members/<int:id>/profile/', members_profile),
    path('comments/', comments_list),
    path('comments/<int:id>/', comments_detail),
    path('posts/', PostsListAPIView.as_view()),
    path('posts/<int:id>/', PostsDetailAPIView.as_view()),
    path('posts/<int:id>/comments/', posts_comments),
    path('profile/', ProfileListAPIView.as_view()),
    path('profile/<int:pk>/', ProfileDetailAPIView.as_view()),
    path('friends/', FriendsListAPIVIEW.as_view()),
    path('friends/<int:pk>/', FriendsDetailAPIView.as_view()),
    path('members/<int:id>/friends/', members_friends),
    path('notifications/', NotificationsListAPIVIEW.as_view()),
    path('members/<int:id>/notifications/', notifications_by_member),
    path('notifications/<category>/', notifications_by_category)
]