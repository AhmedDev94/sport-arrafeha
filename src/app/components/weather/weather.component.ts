import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  weatherForm : FormGroup;
  result : any  ;

  constructor(private weatherService : WeatherService , private formBuilder : FormBuilder) { }
 

  ngOnInit() {
    this.weatherForm =this.formBuilder.group({
      city :[""],
      })
  }
search(){
this.weatherService.SearchWeather(this.weatherForm.value).subscribe((data)=>{console.log("here response from BE", data.result) ; 
this.result = data.result ;
this.result.icone =`https://openweathermap.org/img/wn/${data.result.icone}@2x.png` 
console.log("hello reult" ,this.result)
});

}

}
