import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private _url = 'http://www.omdbapi.com/?apikey=acf0c5cd';
  constructor(
    private http: HttpClient) {
  }

  getPeliculas(searchTerm: string): Observable<any> {
    return this.http.get(this._url + '&s=' + searchTerm)
  }
  getInfoPelicula(searchTerm: string): Observable<any> {
        return this.http.get(this._url + '&i=' + searchTerm)
  }
}
