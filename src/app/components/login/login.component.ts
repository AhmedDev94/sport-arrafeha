import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import  jwt_decode   from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //DEFINE USER OBJECT
  user  : any = {};
  title : any = "login"
  // DEFINE FORM
  loginForm : FormGroup;
  errorMsg : string ;

  constructor(private userService : UserService , private router : Router ) {}

  ngOnInit() {
  }
  login(){
    console.log("here s the object " , this.user);
    this.userService.login(this.user).subscribe((data)=>{
      console.log("here data after login" , data);
      if (data.result) {
       
      sessionStorage.setItem("token", data.result);
      let decodedToken : any = this.decodeToken(data.result);
      console.log("here decodedToken" , decodedToken);

      if (decodedToken.role == "user") {
        this.router.navigate([""]);
      }

      else
      {this.router.navigate(["admin"]);}

      }
      else {
      this.errorMsg ="please check email / pwd"
      }
      
    });
   
    
    // this.router.navigate([""]);
    }
    decodeToken(token: string) {
      return jwt_decode(token);}
}
