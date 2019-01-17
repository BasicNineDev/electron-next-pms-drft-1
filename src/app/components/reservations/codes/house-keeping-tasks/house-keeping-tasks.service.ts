import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../../environments/environment';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HouseKeepingTasksService implements  Resolve<any> {

  private apiBaseUrl = AppConfig.apiBaseUrl;

  houseKeepingTasks: any[];
  houseKeepingTasksChanged: BehaviorSubject<any>;

  constructor(
    private _httpclient: HttpClient
  ) {
    this.houseKeepingTasksChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this._httpclient.get(`${this.apiBaseUrl}/configuration/reservations/codes/house-keeping-tasks/`)
        .subscribe((response: any) => {
          this.houseKeepingTasks = response;
          this.houseKeepingTasksChanged.next(this.houseKeepingTasks);
          resolve(response);
        }, reject);
    });
  }
}
