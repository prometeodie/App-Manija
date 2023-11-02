import { Component } from '@angular/core';
import { AboutInfo } from '../../interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
