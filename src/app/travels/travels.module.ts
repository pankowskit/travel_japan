import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelsRoutingModule } from './travels-routing.module';
import { TravelsComponent } from './travels/travels.component';
import { TravelsS1Component } from './travels-s1/travels-s1.component';
import { TravelsSidebarComponent } from './travels-sidebar/travels-sidebar.component';
import { TravelsListComponent } from './travels-list/travels-list.component';


@NgModule({
  declarations: [
    TravelsComponent,
    TravelsS1Component,
    TravelsSidebarComponent,
    TravelsListComponent
  ],
  imports: [
    CommonModule,
    TravelsRoutingModule
  ]
})
export class TravelsModule { }
