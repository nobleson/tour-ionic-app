import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TourGuideDetailsPage } from '../guide-details/guide-details';

@IonicPage() 
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  thumbnails: string[];
  names: string[];
  profiles: string[];
  items: Array<{name: string, profile: string, thumbnail: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thumbnails = ['../assets/imgs/avatar-1.jpg', '../assets/imgs/avatar-2.jpg', '../assets/imgs/avatar-3.jpg'];
	this.names = ['Romanus', 'Luke Ityav', 'Priscilla'];
	this.profiles = ['I love taking a tour with visitors.', 'I am good to go for and tour', 'I love making friends with tourists'];
	
    this.items = [];
    for(let i = 0; i < 3; i++) {
      this.items.push({
        name: this.names[i],
        profile: this.profiles[i],
        thumbnail: this.thumbnails[i]
      });
    }
  }
  itemTapped(event, item) {
    this.navCtrl.push(TourGuideDetailsPage, {
      item: item
    });
  }
}
