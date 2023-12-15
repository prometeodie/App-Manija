
import { Component, inject } from '@angular/core';
import { NavBar } from '../interfaces/navBar.interface';
import { BoardgamesService } from '../../services/boardgames.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  private boardgamSrvice = inject(BoardgamesService)

  get isSearchBarClose(){
    return this.boardgamSrvice.isSearchBarOpen();
  }

  navBar :NavBar[] = [
    {name:'Home', route:'home'},
    {name:'Blogs', route:'blogs-list'},
    {name:'Juegos', route:'boardgames-list'},
    {name:'Nosotros', route:'about'},
    {name:'Contacto', route:'contact'}
  ]

  openCloseSearchBar(){
    this.boardgamSrvice.openNavBar()
  }
}
