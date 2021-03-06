import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {

  cities: City[];
  city: any = {};
  panelOpenState = false;
  updateForm = false;
  saveForm = true;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(private firebaseService: FirebaseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      console.log(param);
      const id = param;
    }
  }

}
