import { Component } from '@angular/core';
import { Titles } from '../../interfaces';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
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
export class BlogsComponent {
  tags: string[]= ['cocina','juegos','eventos','otros','franco','gusa','tomi','tincho','franBa','Pua'];

  titleSubtitle:Titles = {
    title:'Blogs Manija',
    subTitle:'Aquí podrás encontrar blogs sobre juegos, comida, noticias, cosas random y mucho mas...'
  }

  filterByTag($event:string){
    console.log($event);
  }
}
