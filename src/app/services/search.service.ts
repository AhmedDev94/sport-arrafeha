import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  searchURL: string = "http://localhost:3000/search";

  constructor(private http: HttpClient) {}
  searchPlayer(obj) {
    return this.http.post<{ players: any, msg: string }>(this.searchURL, obj);
  }
  calculImc(obj){
    return this.http.post<{ imc: any, msg: string ,name: string }>(this.searchURL, obj);
  }
}
