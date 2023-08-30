import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team : any = {};
  addTeamForm : FormGroup ;

  constructor(private teamService :  TeamService, private router : Router) { }

  ngOnInit() {
  }
  addTeam(){
    console.log("here s the object ", this.team);
    this.teamService.addTeam(this.team).subscribe((data)=>{console.log("here response from BE", data.msg)});
  this.router.navigate(["admin"]);
  }
}
