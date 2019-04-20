import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteListDetailsPage } from '../site-details/site-details';
@IonicPage() 
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  thumbnails: string[];
  sites: string[];
  descriptions: string[];
  items: Array<{site: string, description: string, thumbnail: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thumbnails = ['../assets/imgs/mandara.jpg', '../assets/imgs/koma.jpg', '../assets/imgs/lamurde.jpg'];
	this.sites = ['Mandara Mountains', 'Koma Hills', 'Lamurde Hot Spring'];
	this.descriptions = ['Mandara Mountains are a volcanic range extending about 190 km ', 'Koma hills is located on the mountainous fringes in Jada', 'Lamurde hot spring is located in Gyakan village '];
	
    this.items = [];
    for(let i = 0; i < 3; i++) {
      this.items.push({
        site: this.sites[i],
        description: this.descriptions[i],
        thumbnail: this.thumbnails[i]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(SiteListDetailsPage, {
      item: item
    });
  }
}
