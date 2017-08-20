import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"

import { baseInfoModule } from './baseInfo/baseInfo.module';
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    baseInfoModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
