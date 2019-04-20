import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoiSitesPage } from './poi-sites';

@NgModule({
  declarations: [
    PoiSitesPage,
  ],
  imports: [
    IonicPageModule.forChild(PoiSitesPage),
  ],
})
export class PoiSitesPageModule {}
