import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers/offers.component';
import { OffersS1Component } from './offers-s1/offers-s1.component';
import { OffersS2Component } from './offers-s2/offers-s2.component';
import { OffersS4Component } from './offers-s4/offers-s4.component';
import { OffersS3Component } from './offers-s3/offers-s3.component';
import { OffersS5Component } from './offers-s5/offers-s5.component';


@NgModule({
  declarations: [
    OffersComponent,
    OffersS1Component,
    OffersS2Component,
    OffersS4Component,
    OffersS3Component,
    OffersS5Component
  ],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
