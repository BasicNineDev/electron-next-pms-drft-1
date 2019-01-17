import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-keeping-attendents',
  templateUrl: './house-keeping-attendents.component.html',
  styleUrls: ['./house-keeping-attendents.component.scss']
})
export class HouseKeepingAttendentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeWindow(): void {
    window.close();
  }
}
