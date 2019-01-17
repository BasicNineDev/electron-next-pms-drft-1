import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

export interface DepositRuleComponent {
  RULE_TYPE: string;
  RULE_DESCRIPTION: string;
  DEP_AMOUNT: string;
  DEP_AMOUNT_TYPE: string;
  DEP_DAYS_PRIOR_TO_ARRIVAL: string;
  DEP_DAYS_AFTER_BOOKING: string;
  ORDER_BY: string;

}

@Component({
  selector: 'app-deposit-rule',
  templateUrl: './deposit-rule.component.html',
  styleUrls: ['./deposit-rule.component.scss']
})
export class DepositRuleComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'RULE_TYPE',
    'RULE_DESCRIPTION',
    'DEP_AMOUNT',
    'DEP_AMOUNT_TYPE',
    'DEP_DAYS_PRIOR_TO_ARRIVAL',
    'DEP_DAYS_AFTER_BOOKING',
    'ORDER_BY'
  ];

  dataSource;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._route.snapshot.data['depositRule']);
    this.dataSource.paginator = this.paginator;
  }

  search(): void {
    this.dataSource = new MatTableDataSource(this._route.snapshot.data['depositRule']);
    this.dataSource.paginator = this.paginator;
  }

  closeWindow(): void {
    window.close();
  }
}
