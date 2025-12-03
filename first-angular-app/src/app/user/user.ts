import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  avatar = input.required<string>();
  name = input.required<string>();
  onSelection = output<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.onSelection.emit(this.name())
  }
}
