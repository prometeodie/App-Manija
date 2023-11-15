import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'boardgame-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boardgame-card.component.html',
  styleUrls: ['./boardgame-card.component.scss']
})
export class BoardgameCardComponent {

  manijometroScore1:number = 90;
  manijometroScore2:number = 50;
  manijometroScore3:number = 20;

  donnutChartColor(scoreManija:number){
     let color1!: string;
     let color2!: string;

    if(scoreManija > 0 && scoreManija <= 25){
      color1 = '#d61919';
      color2 = '#e29609';
    }else if(scoreManija > 25 && scoreManija <= 50){
      color1 = '#C126B2';
      color2 = '#e29609';
    }else if(scoreManija > 50 && scoreManija <= 75){
      color1 = '#C126B2';
      color2 = '#2680C1';
    }else if(scoreManija > 75 && scoreManija <= 100){
      color1 = '#C12655';
      color2 = '#C126B2';
    }

    return `conic-gradient(${color1} ${scoreManija * 3.6/2}deg, ${color2} ${scoreManija * 3.6}deg, rgb(0 0 0 / 65%) 0deg)`;
  }
}
