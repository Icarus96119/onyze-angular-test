import { Component, OnInit, Input } from '@angular/core';

import { PaymentGateway } from '../../core/models/passenger';
import { enumToOptions } from '../../core/utils/enum.util';

@Component({
  selector: 'app-payment-gateways',
  templateUrl: './payment-gateways.component.html',
  styleUrls: ['./payment-gateways.component.scss']
})
export class PaymentGatewaysComponent implements OnInit {

  @Input() paymentGateway = PaymentGateway.ApplePay;

  paymentGatewayOptions = enumToOptions<PaymentGateway>(PaymentGateway);

  constructor() { }

  ngOnInit(): void {
  }

}
