import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any;
  pageOfItems: Array<any>;
  
  constructor(private myRouter:Router , 
              private matchService : MatchService,
              ) { }

  ngOnInit() {
    //RESPONSE ARRAY OF OBJECTS

    this.reloadData();
  
  }
  displayMatch(id:number){
  this.myRouter.navigate([`matchinfo/${id}`]);
  }
  updateMatch(id  ){
  localStorage.setItem("matchId",id)
  this.myRouter.navigate(["editmatch"]);
 
  }
  deleteMatch(id:number){
    this.matchService.deleteMatch(id).subscribe((response)=>{
      console.log("here response after delete", response.msg); 
     this.reloadData();
      
    });
   

  }
  reloadData(){
    this.matchService.getAllMatches().subscribe((response)=>{
      console.log("here response from BE" , response);
      this.matchesTab = response.matches ;
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
