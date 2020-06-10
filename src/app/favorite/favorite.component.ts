import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input('is-favorite') isFavorite: boolean;
  @Output('on-change') change = new EventEmitter();



  constructor() { 
   
  }



  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
   }

}

export interface FavoriteChangeEventArgs {

  newValue: boolean;

}