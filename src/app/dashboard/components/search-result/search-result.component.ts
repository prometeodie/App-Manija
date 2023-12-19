import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoardgamesService } from '../../services/boardgames.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'search-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'scale(0.98',
        opacity:0
      })),
      transition(':enter',[
        animate('100ms ease-in',style({
          transform: 'scale(1)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class SearchResultComponent   {
  private boargamesService = inject(BoardgamesService);

  get isloadingBoardgames(){
    return this.boargamesService.isLoadingBoardgames();
  }

  get boargamesResult(){
    return this.boargamesService.boardgamesByQuery();
  }

  get bordgameNotFound(){
    return this.boargamesService.boargameNotFound();
  }

  closeSearchBar(){
    this.boargamesService.closeSearchBar();
    this.boargamesService.cleanSearchResult();
  }

}
