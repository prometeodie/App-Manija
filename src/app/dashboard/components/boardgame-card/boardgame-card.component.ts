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
export class BoardgameCardComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          datasets: [
              {
                  data: [90,10],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'),documentStyle.getPropertyValue('--black')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
              }
          ]
      };
    }
}
