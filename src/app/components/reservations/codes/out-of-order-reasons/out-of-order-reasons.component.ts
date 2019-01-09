import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ElectronService} from '../../../../providers/electron.service';


export interface OutOfOrderReason {
  REASON_CODE: string;
  RESORT: string;
  DESCRIPTION: string;
  INACTIVE_DATE: string;
  INSERT_DATE: string;
  UPDATE_DATE: string;
  INSERT_USER: string;
  UPDATE_USER: string;
  ORDER_BY: string;
}

const ELEMENT_DATA: OutOfOrderReason[] = [
  {
    REASON_CODE: '1',
    RESORT: '1',
    DESCRIPTION: '1',
    INACTIVE_DATE: '1',
    INSERT_DATE: '1',
    UPDATE_DATE: '1',
    INSERT_USER: '1',
    UPDATE_USER: '1',
    ORDER_BY: '1'
  }
];

@Component({
  selector: 'app-out-of-order-reasons',
  templateUrl: './out-of-order-reasons.component.html',
  styleUrls: ['./out-of-order-reasons.component.scss']
})
export class OutOfOrderReasonsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'REASON_CODE',
    'RESORT',
    'DESCRIPTION',
    'INACTIVE_DATE',
    'INSERT_DATE',
    'UPDATE_DATE',
    'INSERT_USER',
    'UPDATE_USER',
    'ORDER_BY'
  ];
  /*dataSource: any = ELEMENT_DATA;*/
  dataSource;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataSource =  new MatTableDataSource(this._route.snapshot.data['outOfOrderReasons']);
    this.dataSource.paginator = this.paginator;
  }

  closeWindow(): void {
   window.close();
  }
}
