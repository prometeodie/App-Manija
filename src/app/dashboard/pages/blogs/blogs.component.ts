import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  tags: string[]= ['cocina','juegos','eventos','otros','franco','gusa','tomi','tincho','franBa','Pua'];
}
