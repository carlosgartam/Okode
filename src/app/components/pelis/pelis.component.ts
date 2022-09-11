import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent implements OnInit {

  peliculas:any []= [];

  constructor(private PeliculaService: PeliculaService) { }

  ngOnInit(): void {
  }
  getPeliculas(searchTerm: string){
    this.PeliculaService.getPeliculas(searchTerm).subscribe(data =>{
      // console.log(data)
      if(data.Response === "False"){
        this.peliculas = [];
        
      }else{
        this.peliculas = data.Search;
      }
      
    })
  }
}
