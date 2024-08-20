import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './Shared/components/home/home.component';
import { MainComponent } from './Shared/pages/main/main.component';
import { GoalComponent } from './Shared/components/goal/goal.component';
import { ProfileComponent } from './Shared/components/profile/profile.component';
import { ObjetivesComponent } from './Shared/components/objetives/objetives.component';
import { TWK2Component } from './Shared/pages/twk2/twk2.component';
import { CarouselComponent } from './Shared/components/carousel/carousel.component';
import { TitleComponent } from './Shared/components/title/title.component';
import { DatesComponent } from './Shared/components/dates/dates.component';
import { SponsorsComponent } from './Shared/components/sponsors/sponsors.component';
import { RegisterComponent } from './Shared/pages/register/register.component';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { RegistersComponent } from './Shared/components/registers/registers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MainComponent,
    GoalComponent,
    ProfileComponent,
    ObjetivesComponent,
    TWK2Component,
    CarouselComponent,
    TitleComponent,
    DatesComponent,
    SponsorsComponent,
    RegisterComponent,
    FooterComponent,
    RegistersComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
