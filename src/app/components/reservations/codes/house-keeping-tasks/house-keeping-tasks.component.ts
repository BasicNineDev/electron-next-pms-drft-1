import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ElectronService} from '../../../../providers/electron.service';


export interface HouseKeepingTasks {
  TASK_CODE: string;
  DESCRIPTION: string;
  LONG_DESCRIPTION: string;
  ORDER_SEQ: string;
}

const ELEMENT_DATA: HouseKeepingTasks[] = [
  {
    TASK_CODE: '1',
    DESCRIPTION: '1',
    LONG_DESCRIPTION: '1',
    ORDER_SEQ: '1'
  }
];

@Component({
  selector: 'app-house-keeping-tasks',
  templateUrl: './house-keeping-tasks.component.html',
  styleUrls: ['./house-keeping-tasks.component.scss']
})
export class HouseKeepingTasksComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'TASK_CODE',
    'DESCRIPTION',
    'LONG_DESCRIPTION',
    'ORDER_SEQ'
  ];
  /*dataSource: any = ELEMENT_DATA;*/
  dataSource;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataSource =  new MatTableDataSource(this._route.snapshot.data['houseKeepingTasks']);
    this.dataSource.paginator = this.paginator;
  }

  closeWindow(): void {
    window.close();
  }
}
