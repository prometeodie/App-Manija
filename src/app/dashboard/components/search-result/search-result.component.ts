import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoardgamesService } from '../../services/boardgames.service';

@Component({
  selector: 'search-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
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
