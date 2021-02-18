import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PassengerService } from './core/services/passenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'onyze-angular-test';

  @ViewChild('first', { static: true })
  firstElement: ElementRef | undefined;

  @ViewChild('second', { static: true })
  secondElement: ElementRef | undefined;

  @ViewChild('third', { static: true })
  thirdElement: ElementRef | undefined;

  constructor(
    private passengerService: PassengerService
  ) {
  }

  ngOnInit(): void {
    if (this.firstElement && this.secondElement && this.thirdElement) {
      (this.firstElement as any).passenger$ = this.passengerService.firstPassenger$;
      (this.secondElement as any).passenger$ = this.passengerService.secondPassenger$;
      (this.thirdElement as any).passenger$ = this.passengerService.thirdPassenger$;
    }
  }

}
