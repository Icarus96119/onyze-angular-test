import { Passenger, PaymentGateway } from '../models/passenger';

export const firstPassengerInfo: Passenger = {
  name: 'Nora M. Buchanan1',
  hideInformation: false,
  interactionCount: 4,
  email: 'invision1@invisionapp.com',
  phoneNumber: '+144-3412-4421',
  location: 'New York1, NY',
  paymentGateway: PaymentGateway.Visa,
  fromAddress1: 'Jason Heights1',
  fromAddress2: '37-27 74th Street1',
  toAddress1: 'Greenpoint1',
  toAddress2: '81 Gate St Brooklyn1',
  distance: 12.31,
  time: 42.1,
  price: 34.21,
  energy: 12.41
};

export const secondPassengerInfo: Passenger = {
  name: 'ABBBB 12121 sdf',
  hideInformation: true,
  interactionCount: 5,
  email: 'invision2@invisionapp.com',
  phoneNumber: '+144-3412-4422',
  location: 'New York2, NY',
  paymentGateway: PaymentGateway.ApplePay,
  fromAddress1: 'Jason Heights2',
  fromAddress2: '37-27 74th Street2',
  toAddress1: 'Greenpoint2',
  toAddress2: '81 Gate St Brooklyn2',
  distance: 12.32,
  time: 42.2,
  price: 34.22,
  energy: 12.42
};

export const thirdPassengerInfo: Passenger = {
  name: '12312 M. sfsadf',
  hideInformation: false,
  interactionCount: 6,
  email: 'invision3@invisionapp.com',
  phoneNumber: '+144-3412-4423',
  location: 'New York3, NY',
  paymentGateway: PaymentGateway.MasterCard,
  fromAddress1: 'Jason Heights3',
  fromAddress2: '37-27 74th Street3',
  toAddress1: 'Greenpoint3',
  toAddress2: '81 Gate St Brooklyn3',
  distance: 12.33,
  time: 42.3,
  price: 34.23,
  energy: 12.43
};
