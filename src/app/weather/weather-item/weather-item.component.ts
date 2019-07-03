import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { Weather } from '../../shared/interfaces/weather';
import { UserAuthService } from '../../user/auth-service.service';
import { FirebaseService } from '../../shared/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  get weather(): Weather {
    return this.weatherDataService.weather;
  }
  user$: User;

  constructor(private weatherDataService: WeatherDataService,
              private userAuthService: UserAuthService,
              private firebaseService: FirebaseService,
              private snackBar: MatSnackBar) {
   this.userAuthService.user$.subscribe(user => this.user$ = user);
              }

  ngOnInit() {
  }

  addCity() {

  }
}
