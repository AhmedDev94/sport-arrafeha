import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL : string = "http://localhost:3000/users"

  constructor(private httpClient : HttpClient) { }
  login(obj){
    return this.httpClient.post<{result : any , msg : string}>(this.userURL + "/login",obj);
  }
  signup(obj :any , img : File){
    let fData = new FormData();
    fData.append("img" , img);
    fData.append("firstName" , obj.firstName);
    fData.append("lastName" , obj.lastName);
    fData.append("email" , obj.email);
    fData.append("pwd" , obj.pwd);
    fData.append("tel" , obj.tel);
    fData.append("role" , obj.role);
  return this.httpClient.post<{msg : string}>(this.userURL + "/signup",fData);
  }
}
