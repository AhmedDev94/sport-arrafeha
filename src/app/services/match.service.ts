import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // backend adress
  matchURL : string = "http://localhost:3000/matches"
  constructor(private http : HttpClient) {}
  // REQUEST TO ADD MATCH
  addMatch(obj){
    return this.http.post<{msg : string}>(this.matchURL , obj)
  };
  // REQUEST TO GET MATCH BY ID
  getMatchById(id){
    // return this.http.get(this.matchURL + "/" +id)
    return this.http.get<{match : any , msg : string}>(`${this.matchURL}/${id}`)
  };
  //REQUEST TO DELETE MATCH BY ID
  deleteMatch(id){
  return this.http.delete<{msg : string}>(`${this.matchURL}/${id}`)
  };
  //REQUEST TO EDIT MATCH
  updateMatch(obj){
    return this.http.put<{msg : string}>(this.matchURL,obj)
  };
  // REQUEST TO GET ALL MATCHES
  getAllMatches(){
    return this.http.get<{matches : any }>(this.matchURL);
  };
}
