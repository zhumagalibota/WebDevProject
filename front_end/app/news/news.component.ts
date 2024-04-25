// news.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service'; // Import NewsService from services

interface Post {
  id: number;
  author: {
    name: string;
    avatarUrl?: string;
  };
  content: string;
  likes: number;
  liked: boolean;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsFeed: Post[] = [];

  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchNewsFeed();
  }

  fetchNewsFeed(): void {
    // Backend integration needed: Call the service method to fetch news feed data from the backend API
    // Example: this.newsService.getNewsFeedFromBackend().subscribe((data: Post[]) => {
    //   this.newsFeed = data;
    // });
    // Placeholder data until backend integration
    this.newsService.getNewsFeed().subscribe((data: Post[]) => {
      this.newsFeed = data;
    });
  }

  likePost(post: Post): void {
    // Backend integration needed: Call the service method to like a post by sending a request to the backend API
    // Example: this.newsService.likePostToBackend(post.id).subscribe((data: Post) => {
    //   post.likes = data.likes;
    //   post.liked = data.liked;
    // });
    // Placeholder data until backend integration
    this.newsService.likePost(post.id).subscribe((data: Post) => {
      post.likes = data.likes;
      post.liked = data.liked;
    });
  }

  goToCommentsPage(postId: number): void {
    // Navigate to the comments page for the selected post
    // Backend integration needed: Redirect to the comments page based on postId
    // Example: this.router.navigateByUrl(`/comments/${postId}`);
  }
}
