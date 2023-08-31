import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayersComponent } from './components/edit-players/edit-players.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { SingleStadiumComponent } from './components/single-stadium/single-stadium.component';
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { ImcComponent } from './components/imc/imc.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FootbalSearchComponent } from './components/footbal-search/footbal-search.component';
import { DisplayingTeamPlayersComponent } from './displaying-team-players/displaying-team-players.component';


//HTTP://localhost:signin=>logincomponent will be displayed
const routes: Routes = [ 
  {path : "" , component : HomeComponent},
  {path:"signin" , component : LoginComponent },
  {path:"subscription" , component : SignupComponent},
  {path:"signupAdmin" , component : SignupComponent},
  {path:"my-matches", component : MatchesComponent},
  {path :"players", component : PlayersComponent},
  {path : "addMatch", component : AddMatchComponent},
  {path :"addTeam", component : AddTeamComponent },
  {path : "addplayer", component : AddPlayerComponent},
  {path : "admin" , component : AdminComponent},
  {path : "matchinfo/:id" , component : MatchInfoComponent},
  {path : "editmatch" , component : EditMatchComponent},
  {path : "playerinfo/:id" , component : PlayerInfoComponent},
  {path : "editplayer" , component : EditPlayersComponent},
  {path : "teaminfo/:id" , component : TeamInfoComponent},
  {path : "editTeam" , component : EditTeamsComponent},
  {path : "myTeams" , component : TeamsComponent},
  {path : "search" , component : SearchComponent},
  {path : "addstadium" , component : AddStadiumComponent},
  {path : "stadium/:id" , component : SingleStadiumComponent},
  {path : "searchteam" , component : SearchTeamStadiumComponent},
  {path : "searchplayer" , component : SearchPlayerComponent},
  {path : "imc" , component : ImcComponent},
  {path : "weather" , component : WeatherComponent},
  {path : "football" , component : FootbalSearchComponent},
  {path : "searchByTeam" , component : DisplayingTeamPlayersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
