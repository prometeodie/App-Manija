import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  tags: string[]= ['party','euro','filler','ameritrash','20min','30min','40min','60min','120min'];
}
