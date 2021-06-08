import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { FlashCardListsComponent } from './flash-cards/flash-card-lists/flash-card-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashCardsComponent,
    FlashCardListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
