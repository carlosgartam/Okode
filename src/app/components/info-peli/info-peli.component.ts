import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PeliculaService } from 'src/app/services/pelicula.service';
@Component({
  selector: 'app-info-peli',
  templateUrl: './info-peli.component.html',
  styleUrls: ['./info-peli.component.css']
})
export class InfoPeliComponent implements OnInit {
  @Input('pelicula') pelicula: any;

  peliActual: any;
  id : string|null;

  aux : any;
  
  constructor(
               private aRoute: ActivatedRoute,
               private PeliculaService: PeliculaService) {
  
    this.id= this.aRoute.snapshot.paramMap.get('id');
    
    
   }

  ngOnInit(): void {
     if (this.id != null){
      console.log(this.id)
       this.aux = this.getInfoPelicula(this.id);
       //console.log(this.aux)
     }


    
  }

  getInfoPelicula(idpelicula: string) : any{
    this.peliActual = {};
    this.PeliculaService.getInfoPelicula(idpelicula).subscribe(data =>{
      
      this.peliActual.Language = data.Language;
      this.peliActual.Year = data.Year;
      this.peliActual.Title = data.Title;
      this.peliActual.Poster = data.Poster;
      this.peliActual.Plot = data.Plot;
    }) 
    console.log(this.peliActual);
}  
// getPeliculas(searchTerm: string){
//   this.PeliculaService.getPeliculas(searchTerm).subscribe(data =>{
//     // console.log(data)
//     if(data.Response === "False"){
//       this.peliculas = [];
      
//     }else{
//       this.peliculas = data.Search;
//     }
    
//   })

}
