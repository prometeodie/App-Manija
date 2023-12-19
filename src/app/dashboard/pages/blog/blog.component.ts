import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
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
export class BlogComponent {
}
