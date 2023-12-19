import { Component } from '@angular/core';
import { AboutInfo, Titles } from '../../interfaces';
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent {
  titleSubtitle:Titles = {
    title:'Nosotros',
    subTitle:'Un grupo de pibardos que juegan juegitos',
  }

  aboutInfo: AboutInfo[] = [
    {
      img:'../../../../assets/about img/WhatsApp Image 2023-10-27 at 09.47.52.jpeg',
      imgText:'Manijas',
      paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi quaerat laborum quasi quo deleniti vitae qui pariatur. Fugit accusamus amet animi illo impedit nemo, atque natus deserunt quis molestias dolore officia blanditiis placeat ratione distinctio nisi eaque assumenda explicabo delectus dolorem. Provident voluptatum quibusdam quae facilis pariatur. Quos, nesciunt.'
    },
    {
      img:'../../../../assets/about img/WhatsApp Image 2023-10-27 at 09.47.52.jpeg',
      imgText:'Manijas',
      paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi quaerat laborum quasi quo deleniti vitae qui pariatur. Fugit accusamus amet animi illo impedit nemo, atque natus deserunt quis molestias dolore officia blanditiis placeat ratione distinctio nisi eaque assumenda explicabo delectus dolorem. Provident voluptatum quibusdam quae facilis pariatur. Quos, nesciunt.'
    },
    {
      img:'../../../../assets/about img/WhatsApp Image 2023-10-27 at 09.47.52.jpeg',
      imgText:'Manijas',
      paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi quaerat laborum quasi quo deleniti vitae qui pariatur. Fugit accusamus amet animi illo impedit nemo, atque natus deserunt quis molestias dolore officia blanditiis placeat ratione distinctio nisi eaque assumenda explicabo delectus dolorem. Provident voluptatum quibusdam quae facilis pariatur. Quos, nesciunt.'
    },
  ]
}
