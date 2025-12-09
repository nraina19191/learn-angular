import { Component, computed, input, output } from '@angular/core';
import type { UserProfile } from '../types/userType';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: false
})
export class User {
  user = input.required<UserProfile>();
  onSelection = output<UserProfile>();
  selected = input(false)

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.onSelection.emit(this.user())
  }
}
