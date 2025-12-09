import { NgModule } from "@angular/core";
import { App } from "./app";
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { BrowserModule } from "@angular/platform-browser";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [App, HeaderComponent, User, Task, NewTask, Tasks],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule]
})
export class AppModule {

}