import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AvatarModule } from 'ngx-avatar';

import { PassengerComponent } from './passenger.component';
import { LabelValueComponent } from './label-value/label-value.component';
import { PaymentGatewaysComponent } from './payment-gateways/payment-gateways.component';

@NgModule({
  declarations: [
    PassengerComponent,
    LabelValueComponent,
    PaymentGatewaysComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    AvatarModule
  ],
  exports: [
    PassengerComponent
  ]
})
export class PassengerModule { }
