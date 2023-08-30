import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  footballURL : string = "http://localhost:3000/standings"

  constructor(private http : HttpClient) { }
  SearchBySeason(obj){
    return this.http.post<{result :any , teams : any , points : any}>(this.footballURL , obj)
  }
}
