import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// this is the module that gets loaded by Freezedry and the Webpack AOT plugin
@NgModule({
  imports: [
	  ServerModule,
	  AppModule
  ],
  bootstrap: [
	  AppComponent
  ]
})
export class AppFreezedryModule {}
