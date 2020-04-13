import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    WelcomeComponent,
    NotFoundComponent, 
    SideBarComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
