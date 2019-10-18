import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class WeatherService{

  constructor(private http: HttpClient){}

  getWeatherDetails(location: string){
    return this.http.get('http://api.weatherstack.com/forecast?access_key=0ef3d1def4d95282a9020ab735ce0755&query='+location);
  }
}