import { Component } from '@angular/core';
import { Titles } from '../../interfaces';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'scale(0.98',
        opacity:0
      })),
      transition(':enter',[
        animate('300ms ease-in',style({
          transform: 'scale(1)',
          opacity:1
        }))
      ])
    ])
  ]
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
