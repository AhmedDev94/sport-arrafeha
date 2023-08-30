import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-footbal-search',
  templateUrl: './footbal-search.component.html',
  styleUrls: ['./footbal-search.component.css']
})
export class FootbalSearchComponent implements OnInit {

  footballSearchForm : FormGroup;
  result : any  ;
  points : any ;
  teams : any ;

  constructor(private footballService : FootballService , private formBuilder : FormBuilder) { }
 

  ngOnInit() {
    this.footballSearchForm =this.formBuilder.group({
      season :[""],
      league :[""],
      })
  }
search(){
this.footballService.SearchBySeason(this.footballSearchForm.value).subscribe((data)=>{console.log("here response from BE", data.result , data.points , data.teams) ; 
this.result = data.result ;
this.points = data.points;
this.teams = data.teams;

// this.result.logo = data.result.logo
console.log("hello reult" ,this.result)
console.log("hello points" ,this.points)
console.log("hello teams" ,this.teams)
});

}
}
