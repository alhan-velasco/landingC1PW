import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SynopsisComponent } from './components/synopsis/synopsis.component';
import { CharactersComponent } from './components/characters/characters.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersDashboardComponent,
    HeaderComponent,
    SynopsisComponent,
    CharactersComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
