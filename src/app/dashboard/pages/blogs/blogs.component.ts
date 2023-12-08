import { Component } from '@angular/core';
import { Titles } from '../../interfaces';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
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
