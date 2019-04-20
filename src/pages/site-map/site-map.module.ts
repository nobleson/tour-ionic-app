import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteMapPage } from './site-map';

@NgModule({
  declarations: [
    SiteMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteMapPage),
  ],
})
export class SiteMapPageModule {}
