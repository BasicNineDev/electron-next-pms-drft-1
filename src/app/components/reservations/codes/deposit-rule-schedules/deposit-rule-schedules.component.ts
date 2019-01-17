import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

export interface DepositRuleSchedulesComponent {
  RULE_TYPE: string;
  BLOCK: string;
  RATE_CODE: string;
  RESERVATION_TYPE: string;
  BEGIN_DATE: string;
  END_DATE: string;
  OVERRIDE_YN: string;
  ORDER_BY: string;
  RULE_DESCRIPTION: string;
}

@Component({
  selector: 'app-deposit-rule-schedules',
  templateUrl: './deposit-rule-schedules.component.html',
  styleUrls: ['./deposit-rule-schedules.component.scss']
})
export class DepositRuleSchedulesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'RULE_TYPE',
    'BLOCK',
    'RATE_CODE',
    'RESERVATION_TYPE',
    'BEGIN_DATE',
    'END_DATE',
    'OVERRIDE_YN',
    'ORDER_BY',
    'RULE_DESCRIPTION'
  ];

  dataSource;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._route.snapshot.data['depositRuleSchedules']);
    this.dataSource.paginator = this.paginator;
  }

  search(): void {
    this.ngOnInit();
  }

  closeWindow(): void {
    window.close();
  }
}
