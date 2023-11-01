
import { Component } from '@angular/core';
import { NavBar } from '../interfaces/navBar.interface';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  navBar :NavBar[] = [
    {name:'Home', route:'home'},
    {name:'Blogs', route:'blogs-list'},
    {name:'Juegos', route:'boardgames-list'},
    {name:'Nosotros', route:'about'},
    {name:'Contacto', route:'contact'},
  ]
}
