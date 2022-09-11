import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-peli',
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.css']
})
export class CardPeliComponent implements OnInit {
  @Input('pelicula') pelicula: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pelicula)
  }
  
}
