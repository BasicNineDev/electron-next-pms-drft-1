import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { AppConfig } from 'environments/environment';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OutOfOrderReasonsService implements Resolve<any> {

  private apiBaseUrl = AppConfig.apiBaseUrl;

  outOfOrderReasons: any[];
  onOutOfOrderReasonsChanged: BehaviorSubject<any>;
  constructor(
    private _httpClient: HttpClient
  ) {
    this.onOutOfOrderReasonsChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${this.apiBaseUrl}/configuration/reservations/codes/out-of-order-reasons/`)
        .subscribe((response: any) => {
          this.outOfOrderReasons = response;
          this.onOutOfOrderReasonsChanged.next(this.outOfOrderReasons);
          resolve(response);
        }, reject);
    });
  }
}
