import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamsTab } from 'src/app/data folder/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teamsTab : any ;
  constructor(private router : Router , private teamService : TeamService) {}

  ngOnInit() {
    this.reloadData();
  }
  displayTeam(id:number){
  this.router.navigate([`teaminfo/${id}`])
}
updateTeam(id){
localStorage.setItem("teamId", id)
this.router.navigate(["editTeam"])

}
deleteTeam(id:number){ 
  this.teamService.deleteTeam(id).subscribe((response)=>{
  console.log("here response after delete", response.msg); 
  this.reloadData();
  });

}
reloadData(){
  this.teamService.getAllTeams().subscribe((response)=>{
    console.log("here response from BE" , response);
    this.teamsTab = response.teams ;
  });
}
}
