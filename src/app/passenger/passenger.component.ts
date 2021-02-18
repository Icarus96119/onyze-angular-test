import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { PaymentGateway } from '../core/models/passenger';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  PaymentGateway = PaymentGateway;
  slideColor: ThemePalette = 'accent';

  passenger$ = null;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
