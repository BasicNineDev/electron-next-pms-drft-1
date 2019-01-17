import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

export interface ReservetionTypes {
  GUARANTEE_CODE: string;
  SHORT_DESCRIPTION: string;
  /*CASH_BASIS_YN: string;
  CRO_ALLOWED_YN: string;*/
  PHONE_REQUIRED_YN: string;
  ADDRESS_REQUIRED_YN: string;
  CREDIT_CARD_REQUIRED_YN: string;
  MANDATORY_ARR_TIME_YN: string;
  RESERVE_INVENTORY_YN: string;
  DEPOSIT_REQUIRED_YN: string;
  ORDER_BY: string;
}


@Component({
  selector: 'app-reservation-types',
  templateUrl: './reservation-types.component.html',
  styleUrls: ['./reservation-types.component.scss']
})
export class ReservationTypesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'GUARANTEE_CODE',
    'SHORT_DESCRIPTION',
    /*'CASH_BASIS_YN',
    'CRO_ALLOWED_YN',*/
    'PHONE_REQUIRED_YN',
    'ADDRESS_REQUIRED_YN',
    'CREDIT_CARD_REQUIRED_YN',
    'MANDATORY_ARR_TIME_YN',
    'RESERVE_INVENTORY_YN',
    'DEPOSIT_REQUIRED_YN',
    'ORDER_BY'
  ];

  dataSource;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._route.snapshot.data['reservationTypes']);
    this.dataSource.paginator = this.paginator;
  }

  closeWindow(): void {
    window.close();
  }

}
