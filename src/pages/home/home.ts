import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  "cal" = {
   "valor1": "HOla"
  }

  constructor(public navCtrl: NavController, public events: Events) {
    events.subscribe('star-rating:changed', (starRating) => {
      console.log("Cal: "+starRating);
    });
  }

}
