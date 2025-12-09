import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { UserProfile } from './types/userType';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = signal(DUMMY_USERS);
  selectedUser: UserProfile | undefined = undefined

  onSelectUser(user: UserProfile) {
    this.selectedUser = user
  }
}
