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
    if(this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(()=>{
      this.boargameService.getBoardgamesByQuery(query);
    },350)
  }

  closeSearchBar(){
    this.boargameService.closeSearchBar()
    this.txtQuery.nativeElement.value = "";
  }
}
