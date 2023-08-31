import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() X : any ;
  @Output() matchesOutput: EventEmitter<any>=new EventEmitter();
  myPath : string ;

  constructor( private router : Router , private Mservice : MatchService) { }

  ngOnInit() {
    this.myPath = this.router.url;
    console.log("here my path", this.myPath)
  }
 scoreColor (scoreOne :number , scoreTwo : number){
  if (scoreOne>scoreTwo) {
    return "green";}
   if (scoreOne<scoreTwo){
      return "red";
    }
    else return "blue";
  }
  deleeMatch(id){
    this.Mservice.deleteMatch(id).subscribe(()=>{})
  }

 }

