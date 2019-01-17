import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AppConfig} from '../../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepositRuleService implements  Resolve<any> {

  private apiBaseUrl = AppConfig.apiBaseUrl;

  depositRule: any[];
  depositRuleChanged: BehaviorSubject<any>;

  constructor(
    private _httpclient: HttpClient
  ) {
    this.depositRuleChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this._httpclient.get(`${this.apiBaseUrl}/Configuration/reservations/codes/deposit-rule/`)
        .subscribe((response: any) => {
          this.depositRule = response;
          this.depositRuleChanged.next(this.depositRule);
          resolve(response);
        }, reject);
    });
  }
}
