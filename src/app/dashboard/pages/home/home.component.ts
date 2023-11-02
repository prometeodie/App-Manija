import { Component, OnInit } from '@angular/core';
import { EventManija, New, ResponsiveCarouselOptions } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news:New[] = [
    {
      img:'https://devir.com.ar/wp-content/uploads/2022/01/Lunacapital-web2.jpg',
      type:'evento',
      route:'/lmdr/boardgame/lunaCapital'
    },
    {
      img:'https://b1803394.smushcdn.com/1803394/wp-content/uploads/2022/10/tiny-turbo-cars-setup-1024x519.jpg?lossy=1&strip=1&webp=1',
      type:'juego',
      route:'/lmdr/blog/pepito'
    },
    {
      img:'https://m.media-amazon.com/images/I/81-W-HlEX0L.jpg',
      type:'blog',
      route:''
    },
  ]

  responsiveOptions: ResponsiveCarouselOptions[] | undefined;

 events: EventManija[] = [
  {
    title: 'Domingo Manija',
    img: 'https://media.npr.org/assets/img/2020/07/04/gettyimages-1212201194_wide-abce344697797f4c610b6a8f5a2e4ee3ecdaf644-s1400-c100.jpg',
    day: 'Todos los Dias',
    time: '18hs a 22hs',
    place: 'Arte y Parte',
    backGroungColor:'#00D59C'
  },
  {
    title: 'Geektopia',
    img: 'https://media.npr.org/assets/img/2020/07/04/gettyimages-1212201194_wide-abce344697797f4c610b6a8f5a2e4ee3ecdaf644-s1400-c100.jpg',
    day: '26 de Noviembre',
    time: '16hs a 23hs',
    place: 'Arte y Parte',
    backGroungColor:'#872E6E'
  },
  {
    title: 'Peña Manija',
    img: 'https://media.npr.org/assets/img/2020/07/04/gettyimages-1212201194_wide-abce344697797f4c610b6a8f5a2e4ee3ecdaf644-s1400-c100.jpg',
    day: '15 Octubre',
    time: '18hs a 22hs',
    place: 'Arte y Parte',
    backGroungColor:'#18DCFF'
  },
  ]

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

}

