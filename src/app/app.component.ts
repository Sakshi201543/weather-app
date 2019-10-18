import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private location: string;
  private loading: boolean = false;
  private weatherDetails: object;
  private weatherDescription: string;
  private humidity: string;
  private temperature: string;

  constructor(private weatherService: WeatherService){}

  ngOnInit(){}
  
  onSubmit(form: NgForm){
    this.location = form.value.location;
    this.loading = true;
    this.weatherService.getWeatherDetails(this.location)
      .subscribe(data => {
        this.weatherDetails = data;
        console.log(this.weatherDetails.current);
        this.weatherDescription = this.weatherDetails.current.weather_descriptions[0];
        this.humidity = this.weatherDetails.current.humidity;
        this.temperature = this.weatherDetails.current.temperature;
        this.loading = false;
      }
    );
  }
}
