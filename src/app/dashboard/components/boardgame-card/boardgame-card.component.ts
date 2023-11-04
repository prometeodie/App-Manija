import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'boardgame-card',
  standalone: true,
  imports: [CommonModule,TagModule],
  templateUrl: './boardgame-card.component.html',
  styleUrls: ['./boardgame-card.component.scss']
})
export class BoardgameCardComponent {

}
