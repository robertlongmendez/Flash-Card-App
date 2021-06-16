import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFlashCardsComponent } from './flash-cards/add-flash-cards/add-flash-cards.component';
import { FlashCardListsComponent } from './flash-cards/flash-card-lists/flash-card-lists.component';

import { FlashCardsComponent } from './flash-cards/flash-cards.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/flashcards', pathMatch: 'full' },
  { path: 'flashcards', component: FlashCardsComponent },
  { path: 'flashcardlists', component: FlashCardListsComponent },
  { path: 'addflashcards', component: AddFlashCardsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
