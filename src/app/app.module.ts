import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home-page/home-page';
import { StorePage } from '../pages/store-page/store-page';
import { CommentsPage } from '../pages/comments-page/comments-page';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    StorePage,
    CommentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    StorePage,
    CommentsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
