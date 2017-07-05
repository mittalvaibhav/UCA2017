import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './nav-bar.component'
import { HeaderComponent } from './header.component';

import { AddBookComponent } from './add-book.component';
import { RequestBookComponent } from './request-book.component';
import { LatestBooksComponent } from './latest-books.component';

import { MainPageComponent } from './main-page.component';
import { AllBooksComponent } from './all-books.component';
import { DataTableComponent } from './table-component';

import { TableFocusDirective } from './table-focus.directive';

import { ExportComponent } from './exporttoexcel.component';


const appRoutes: Routes = [
  {
    path: "home",
    component: MainPageComponent
  },
  {
    path: "addbook",
    component: AddBookComponent
  },
  {
    path:"bookrequest",
    component: RequestBookComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
  declarations: [ 
    AppComponent, 
    NavBarComponent, 
    HeaderComponent,
    AddBookComponent,
    RequestBookComponent,
    LatestBooksComponent,
    ExportComponent,
    MainPageComponent,
    AllBooksComponent,
    DataTableComponent,

    TableFocusDirective
    ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
