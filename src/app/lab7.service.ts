import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Planet } from './planet'
import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operator';

// import {  } from '@angluar/common/http' ;

@Injectable({
  providedIn: 'root'
})

export class Lab7Service {

  public errorMessage: string;
  //private handle

  apiUrl: string = 'http://ghosteacher.com/apis/planets.php?apikey=pineapple' ;

  getPlanet(id: number) : Observable<Planet>{
    return this.http.get<Planet>(this.apiUrl + `&p_id=${id}`);
  }

  getPlanets(id?: number) : Observable<Planet[]>{
    if(id){
      return this.http.get<Planet[]>(this.apiUrl + `&p_id=${id}`);
    }
    return this.http.get<Planet[]>(this.apiUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
