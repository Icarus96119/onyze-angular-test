export enum PaymentGateway {
  Paypal = 'PAYPAL',
  Visa = 'VISA',
  MasterCard = 'MASTER_CARD',
  ApplePay = 'APPLE_PAY'
}

export interface Passenger {
  name: string;
  email: string;
  hideInformation: boolean;
  interactionCount: number;
  paymentGateway: PaymentGateway;
  phoneNumber: string;
  location: string;
  fromAddress1: string;
  fromAddress2: string;
  toAddress1: string;
  toAddress2: string;
  distance: number;
  time: number;
  price: number;
  energy: number;
}
