import { Component } from '@angular/core';
import { Titles } from '../../interfaces';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  titleSubtitle:Titles = {
    title:'Ludoteca Manija',
    subTitle:'Aquí podrás encontrar Todos Los juegos de nuestra Ludoteca junto con reseñas Manijas, tutoriales y más....'
  }
  tags: string[]= ['party','euro','filler','ameritrash','20min','30min','40min','60min','120min'];

  filterByTag($event:any){
    console.log($event)
  }
}
