import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  addStadiumForm : FormGroup;


  constructor(private formBuilder : FormBuilder) { }
  
   T:any=[];
  ngOnInit() {
   
    this.T =  JSON.parse(localStorage.getItem("stadiums")||"[]");
    this.addStadiumForm =this.formBuilder.group({
      
   
    name :["",[Validators.required ]],
    capacity :["",[Validators.required ]],
    country : ["",],
    
    
   
    })
  
  }
  newId(T :any) {
    let  max :any;
    if (T.length == 0) {
      max = 1;
    } else {
      max = T[0].id;
  
      for (let i = 1; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return max+1;
  }
addStadium(){
  this.T =  JSON.parse(localStorage.getItem("stadiums")||"[]");
  const newStadium = this.addStadiumForm.value;
  newStadium.id = this.newId(this.T);
  this.T.push(newStadium);
  localStorage.setItem("stadiums", JSON.stringify(this.T));
}
}



 


