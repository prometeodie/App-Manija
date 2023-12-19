import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';


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
  private _boargameNotFound = signal<boolean>(false);
  public boargameNotFound = computed(()=>this._boargameNotFound());
  readonly debounceTimeMs = 350;

  constructor() {
  }

  getBoardgamesByQuery(query:string){
    this.cleanSearchResult();
    this._isLoadingBoardgames.set(true);
    if(query.length === 0 ){
      this._boardgamesByQuery.set([]);
      this._isLoadingBoardgames.set(false);
      return;
    }
      this.http.get<any | undefined>(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .pipe(
        catchError((err)=>{return of(undefined)})
      )
      .subscribe(boardgames =>{
        this._isLoadingBoardgames.set(false);
        if(!boardgames){
          this._boargameNotFound.set(true)
          return undefined;
        }
        this._boardgamesByQuery.set(boardgames.results);
      })
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

  boardgameNotFound(){
    this._boargameNotFound.set(false);
  }
}
