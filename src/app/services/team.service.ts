import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  TeamURL : string = "http://localhost:3000/teams"
  constructor(private http : HttpClient) { }
  // REQUEST TO ADD Team
  addTeam(obj){
    return this.http.post<{msg : string}>(this.TeamURL , obj)
  };
  // REQUEST TO GET Team BY ID
  getTeamById(id){
    // return this.http.get(this.TeamURL + "/" +id)
    return this.http.get<{team : any , msg : string}>(`${this.TeamURL}/${id}`)
  };
  //REQUEST TO DELETE Team BY ID
  deleteTeam(id){
  return this.http.delete<{msg:string}>(`${this.TeamURL}/${id}`)
  };
  //REQUEST TO EDIT Team
  updateTeam(obj){
    return this.http.put<{msg : string}>(this.TeamURL,obj)
  };
  // REQUEST TO GET ALL Teams
  getAllTeams(){
    return this.http.get<{teams : any}>(this.TeamURL);
  };
}
