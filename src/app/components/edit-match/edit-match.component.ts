import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  editForm :    FormGroup;
  match : any ={};
  id: any;
  
  constructor( private matchService : MatchService , private router : Router) { }

  ngOnInit() {
   this.id =(localStorage.getItem("matchId"));
   this.matchService.getMatchById(this.id).subscribe((data)=>{
    this.match = data.match
   });
  }
  validate (){
    this.matchService.updateMatch(this.match).subscribe((result)=>{
     console.log("here s the result after update" , result.msg) ;
     this.router.navigate(["admin"])
    })
  }

}
