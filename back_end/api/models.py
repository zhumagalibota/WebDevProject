from django.db import models
from django.contrib.auth.models import User


class Members(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='members', null=True, blank=True)
    nickname = models.CharField(max_length=50, unique=True, null=False)
    ava_url = models.TextField(default="https://i.pinimg.com/564x/d1/e3/d2/d1e3d2a12bc3d0221898c4391dffcfff.jpg")


class Posts(models.Model):
    url = models.TextField(default="https://i.pinimg.com/564x/dc/67/34/dc67343698a947085cbbfc83b1c884c5.jpg")
    description = models.TextField(default=".")
    hashtag = models.CharField(max_length=50, default="hi")
    members = models.ForeignKey(Members, on_delete=models.CASCADE, related_name="posts")


class Comments(models.Model):
    text = models.TextField(default=".")
    members = models.ForeignKey(Members, on_delete=models.CASCADE, related_name="comments")
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name="comments")


class Profile(models.Model):
    full_name = models.CharField(max_length=200)
    birth_date = models.TextField('date of birth')
    members = models.ForeignKey(Members, on_delete=models.CASCADE, related_name="profile")

    def to_json(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'birth_date': self.birth_date,
            'members_id': self.members.pk
        }


class Friends(models.Model):
    nickname = models.ForeignKey(Members, on_delete=models.CASCADE, related_name="friend")
    members = models.ForeignKey(Members, on_delete=models.CASCADE, related_name="friends", default=1)

    def to_json(self):
        return {
            "nickname": self.nickname.pk,
            "friends": self.members.pk
        }


# Manager model for Notifications
class NotificationsManager(models.Manager):
    def by_member(self, member_id):
        return self.filter(nickname_id=member_id)

    def by_category(self, category):
        return self.filter(category=category)


class Notifications(models.Model):
    nickname = models.ForeignKey(Members, on_delete=models.CASCADE, related_name="notifs")
    category = models.CharField(max_length=150)

    # Add custom manager
    notifications = NotificationsManager()  # custom manager
    objects = models.Manager()  # default manager (optional, depending on your needs)

