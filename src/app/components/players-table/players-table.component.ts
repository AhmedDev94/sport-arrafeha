import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playersTab } from 'src/app/data folder/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
 playersTab : any ;
  constructor(private router:Router , 
    private playerService : PlayerService,) { }

  ngOnInit() {
    this.reloadData();
  }
  displayPlayer(id){
  this.router.navigate([`playerinfo/${id}`]);
}
updatePlayer(id){
 localStorage.setItem("playerId",id);
this.router.navigate(["editplayer"]);

}
deletePlayer(id:number){
  this.playerService.deleteplayer(id).subscribe((response)=>{
    console.log("here response after delete", response.msg); 
   this.reloadData();
  });

}
reloadData(){
  this.playerService.getAllplayeres().subscribe((response)=>{
    console.log("here response from BE" , response);
    this.playersTab = response.players ;
  });
}
}
