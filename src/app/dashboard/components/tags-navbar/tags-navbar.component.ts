import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tags-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-navbar.component.html',
  styleUrls: ['./tags-navbar.component.scss']
})
export class TagsNavbarComponent {
@Input() tags!:string[];
}
