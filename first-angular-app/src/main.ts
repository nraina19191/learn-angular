import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

platformBrowser().bootstrapModule(AppModule)

