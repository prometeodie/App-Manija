import { Component, OnInit } from '@angular/core';
import { ResponsiveCarouselOptions } from '../../interfaces';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
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
export class GameComponent implements OnInit{
  responsiveOptions: ResponsiveCarouselOptions[] | undefined;
  showImg: boolean = false;
  fullImgSrc!:string;
  manijometroScore = 90;
  reJugabilidad = 'alta';
  dificultad = 'media';
  news: any = [
    { bgImg:'../../../../assets/boardgame carousel imgs/boargame img1.jpeg'},
    { bgImg:'../../../../assets/boardgame carousel imgs/boargame img2.jpeg'},
    { bgImg:'../../../../assets/boardgame carousel imgs/boargame img3.jpeg'}
  ];

  ngOnInit(): void {
      this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }

    showFullImg(src:string){
      this.fullImgSrc = src;
      this.showImg = !this.showImg;
    }

    closeFullImg(){
      this.showImg = false;
    }
}

