import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'boardgame-card',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './boardgame-card.component.html',
  styleUrls: ['./boardgame-card.component.scss']
})
export class BoardgameCardComponent {

  manijometroScore:number = 90;
}
