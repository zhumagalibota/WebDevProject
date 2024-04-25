from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Members)
class MembersAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'ava_url', 'user')


@admin.register(Posts)
class PostAdmin(admin.ModelAdmin):
    list_display = ('url', 'description', 'hashtag', 'members')
