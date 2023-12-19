import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgamesService } from '../../services/boardgames.service';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  private boargameService = inject(BoardgamesService);
  @ViewChild('txtQuery')
  txtQuery!: ElementRef;
  private debounceTimer?: NodeJS.Timeout

  searchBoardGame(query:string){
    if(query.length === 0 ){
      this.cleanOldSearches();
      this.boargameService.boardgameNotFound();
    }
    if(query){
      if(this.debounceTimer) clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(()=>{
        this.boargameService.getBoardgamesByQuery(query);
      },600)
    }
    return;
  }

  closeSearchBar(){
    setTimeout(()=>{
      this.boargameService.closeSearchBar();
      this.cleanOldSearches();
      this.txtQuery.nativeElement.value = "";
    },350)
  }

  //this function is to clean search result when the input is empty
  cleanOldSearches(){
    this.boargameService.cleanSearchResult();
  }
}
