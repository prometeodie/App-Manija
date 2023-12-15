import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BoardgamesService {
  private _boardgames = signal<any>([]); //tipar la signal
  private _boardgamesByQuery = signal<any>([]); //tipar la signal
  private _isLoadingBoardgames = signal<boolean>(false);
  public boardgamesByQuery = computed(()=> this._boardgamesByQuery());
  public boardgames = computed(()=> this._boardgames());
  public isLoadingBoardgames = computed(()=>this._isLoadingBoardgames())
  private http = inject(HttpClient);
  private _isSearchBarOpen = signal<boolean>(false)
  public isSearchBarOpen = computed(()=>this._isSearchBarOpen())
  readonly debounceTimeMs = 350;

  constructor() {
  }

  getBoardgamesByQuery(query:string){
    this._isLoadingBoardgames.set(true);
    if(query.length === 0 ){
      this._boardgamesByQuery.set([]);
      this._isLoadingBoardgames.set(false);
      return;
    }
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .subscribe(boardgames =>{
      this._isLoadingBoardgames.set(false);
      this._boardgamesByQuery.set(boardgames.results);
    })
    // TODO:agarrar el error para mostrar el boargame no encontrado usando un pipe

  }

  closeSearchBar(){
    if(this._isSearchBarOpen()){
      this._isSearchBarOpen.set(false)
    }
  }

  openNavBar(){
    this._isSearchBarOpen.set(!this._isSearchBarOpen());
  }

  cleanSearchResult(){
    this._boardgamesByQuery.set([])
  }
}
