import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AppConfig} from '../../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepositRuleSchedulesService implements  Resolve<any> {

  private  apiBaseUrl = AppConfig.apiBaseUrl;

  depositRuleSchedules: any[];
  depositRuleSchedulesChanged: BehaviorSubject<any>;

  constructor(
    private  _httpclient: HttpClient
  ) {
    this.depositRuleSchedulesChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this._httpclient.get(`${this.apiBaseUrl}/Configuration/reservations/codes/deposit-rule-schedules/`)
        .subscribe((response: any) => {
          this.depositRuleSchedules = response;
          this.depositRuleSchedulesChanged.next(this.depositRuleSchedules);
          resolve(response);
        }, reject);
    });
  }
}
