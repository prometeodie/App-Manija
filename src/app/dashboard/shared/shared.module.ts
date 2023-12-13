import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { SearchResultComponent } from '../components/search-result/search-result.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchBarComponent,
    SearchResultComponent
  ],
  exports:[
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
