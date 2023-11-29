import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'manijometro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manijometro.component.html',
  styleUrls: ['./manijometro.component.scss']
})
export class ManijometroComponent {
  @Input() manijometroScore!: number;

  isClosedMAnijometroRules:boolean = false;

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

 openCloseMAnijometroRules(){
  this.isClosedMAnijometroRules = !this.isClosedMAnijometroRules;
 }
}
