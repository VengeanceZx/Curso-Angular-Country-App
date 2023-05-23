import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { LigthsaberLoadingComponent } from './components/ligthsaber-loading/ligthsaber-loading.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingComponentComponent,
    SearchBoxComponent,
    SideBarComponent,
    LigthsaberLoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingComponentComponent,
    SearchBoxComponent,
    SideBarComponent,
  ]

})
export class SharedModule { }
