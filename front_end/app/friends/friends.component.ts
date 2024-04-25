import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface Friend {
  nickname_id: string;
  members_id: string;
  id: string;
  avatarUrl?: string;
  isPending?: boolean;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  @Input() friends: Friend[] = [];
  friendsCount: number = 0;
  proposals: Friend[] = []; // Array to store friend proposals

  constructor(private router: Router) { }

  acceptFriendRequest(request: Friend) {
    // Logic to accept friend request
    console.log('Accepted friend request:', request.nickname_id);
    request.isPending = false;
    // Add friend to friends list
    this.friends.push(request);
    this.friendsCount++;

    // TODO: Implement backend URL for accepting friend request
  }

  rejectFriendRequest(request: Friend) {
    // Logic to reject friend request
    console.log('Rejected friend request:', request.nickname_id);
    this.friends = this.friends.filter(req => req !== request);

    // TODO: Implement backend URL for rejecting friend request
  }

  deleteFriend(friend: Friend) {
    // Logic to delete friend
    console.log('Deleted friend:', friend.nickname_id);
    this.friends = this.friends.filter(f => f !== friend);
    this.friendsCount--;

    // TODO: Implement backend URL for deleting friend
  }

  isFriend(friend: Friend): boolean {
    return this.friends.some(f => f.id === friend.id);
  }

  sendFriendProposal(proposal: Friend) {
    // Logic to send friend proposal
    console.log('Sent friend proposal to:', proposal.nickname_id);
    this.proposals = this.proposals.filter(p => p !== proposal);
    // Update UI or send request to backend

    // TODO: Implement backend URL for sending friend proposal
  }

  goToUserPage(): void {
    // Logic to navigate to user page
    this.router.navigateByUrl('/profile');
  }

  goToFriendsPage(): void {
    // Logic to navigate to friends page
    this.router.navigateByUrl('/friends');
  }

  goToNotificationsPage(): void {
    // Logic to navigate to notifications page
    this.router.navigateByUrl('/notifications');
  }

  goToPhotosPage(): void {
    // Logic to navigate to photos page
    this.router.navigateByUrl('/photos');
  }
}
