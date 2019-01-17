import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {AppConfig} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReservationTypesService implements Resolve<any> {

  private apiBaseUrl = AppConfig.apiBaseUrl;

  reservationTypes: any[];
  reservationTypesChanged: BehaviorSubject<any>;

  constructor(
    private _httpclient: HttpClient
  ) {
    this.reservationTypesChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this._httpclient.get(`${this.apiBaseUrl}/configuration/reservations/codes/reservation-types/`)
        .subscribe((response: any) => {
          this.reservationTypes = response;
          this.reservationTypesChanged.next(this.reservationTypes);
          resolve(response);
        }, reject);
    });
  }
}
