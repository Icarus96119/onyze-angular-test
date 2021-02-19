import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { Passenger, PaymentGateway } from '../core/models/passenger';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  PaymentGateway = PaymentGateway;
  slideColor: ThemePalette = 'accent';

  // @ts-ignore
  passenger$: BehaviorSubject<Passenger>;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
