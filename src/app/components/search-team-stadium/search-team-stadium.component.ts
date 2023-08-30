import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stadiums, teams } from 'src/app/data folder/data';

@Component({
  selector: 'app-search-team-stadium',
  templateUrl: './search-team-stadium.component.html',
  styleUrls: ['./search-team-stadium.component.css']
})
export class SearchTeamStadiumComponent implements OnInit {

searchForm : FormGroup;
teamsTab = teams;
stadiumsTab = stadiums;
 findedTeam : any;
 errorMsg: any;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.searchForm =this.formBuilder.group({
    stadiumName :["",[Validators.required , Validators.minLength(3)]],
    
    })
  }
search(){
  let ch = this.searchForm.value.stadiumName;
  let findedStadium:any ;
  
  for (let i = 0; i < this.stadiumsTab.length; i++) {
    if (this.stadiumsTab[i].name == ch) {
      findedStadium = this.stadiumsTab[i].id
      break;
    }
  }
  if (findedStadium) {
    this.errorMsg="";
    for (let j = 0; j < this.teamsTab.length; j++) {
      if (this.teamsTab[j].stadiumid==findedStadium) {
        this.findedTeam = this.teamsTab[j]
        break ;
      }
      
     }
    }
    else{this.errorMsg="team not found"}
  }
 

}
