import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SiteListDetailsPage } from '../pages/site-details/site-details';
import { TourGuideDetailsPage } from '../pages/guide-details/guide-details';
//import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SiteListDetailsPage,
    TourGuideDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SiteListDetailsPage,
    TourGuideDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  //  Geolocation,
    //OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
