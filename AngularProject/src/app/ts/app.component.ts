import { Component } from '@angular/core';
import {NavBarComponent} from './nav-bar.component';
import {BookService} from './book.service';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <header></header>
    <router-outlet id="mainsection"></router-outlet>
  `,
  providers:[BookService]
})

export class AppComponent  {
  name = 'Angular';
}
