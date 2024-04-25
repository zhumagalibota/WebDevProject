import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comments.service';

interface Comment {
  author: string;
  content: string;
  timestamp: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  standalone: true,
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  newCommentContent: string = '';

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    // this.loadComments();
  }

  // loadComments(): void {
  //   // Fetch existing comments from backend
  //   this.commentService.getComments().subscribe((data: Comment[]) => {
  //     this.comments = data;
  //   });
  // }

  // submitComment(): void {
  //   if (this.newCommentContent.trim() !== '') {
  //     // Create new comment object
  //     const newComment: Comment = {
  //       author: 'Your Name', // Replace with actual logged-in user's name
  //       content: this.newCommentContent,
  //       timestamp: new Date().toLocaleString(), // Use appropriate timestamp format
  //       avatarUrl: 'path/to/avatar.jpg' // URL to user's avatar image
  //     };
  //
  //     // Send new comment to backend for storage
  //     this.commentService.addComment(newComment).subscribe(() => {
  //       // On successful submission, reload comments from backend
  //       this.loadComments();
  //       // Clear the textarea for new comment
  //       this.newCommentContent = '';
  //     });
  //   }
  // }
}
