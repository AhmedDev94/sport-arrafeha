import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  playerURL : string = "http://localhost:3000/players"
  constructor(private http : HttpClient) { }
  // REQUEST TO ADD team
  addplayer(obj){
    return this.http.post<{msg : string , player : any }>(this.playerURL , obj)
  }; 
  // REQUEST TO GET player BY ID
  getplayerById(id){
    // return this.http.get(this.playerURL + "/" +id)
    return this.http.get<{player : any , msg : string}>(`${this.playerURL}/${id}`)
  };
  //REQUEST TO DELETE player BY ID
  deleteplayer(id){
  return this.http.delete<{msg:string}>(`${this.playerURL}/${id}`)
  };
  //REQUEST TO EDIT player
  updateplayer(obj){
    return this.http.put<{msg : string}>(this.playerURL,obj)
  };
  // REQUEST TO GET ALL playerES
  getAllplayeres(){
    return this.http.get<{players : any}>(this.playerURL);
  };
}
