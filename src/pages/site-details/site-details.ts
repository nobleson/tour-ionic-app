import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController , ModalController } from 'ionic-angular';

@Component({
  selector: 'site-details',
  templateUrl: 'site-details.html'
})
export class SiteListDetailsPage {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,private modelController: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  actionSheet(){
    let actSheet = this.actionSheetCtrl.create({
      title:'More Actions',
      buttons:[
        {
          text:'Add POI',
          handler: ()=>{
            this.openModel();
          }
        }
      ]
    });
    actSheet.present();
  }
  openModel(){
    let model = this.modelController.create('ModelPage');
    model.present()
  }
   

}
