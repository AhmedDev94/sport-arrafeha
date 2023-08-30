import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { teamsTab } from 'src/app/data folder/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.css']
})
export class EditTeamsComponent implements OnInit {
  editTeamForm : FormGroup;
  team : any = {};
  id : any ;
   constructor(private teamService: TeamService , private router : Router) { }
 
   ngOnInit() {
   this.id = localStorage.getItem("teamId");
   this.teamService.getTeamById(this.id).subscribe((data)=>{
    this.team = data.team
   });
  }
   validate (){
    this.teamService.updateTeam(this.team).subscribe((result)=>{
     console.log("here s the result after update" , result.msg) ;
     this.router.navigate(["admin"])
    })
  }
  }
   


