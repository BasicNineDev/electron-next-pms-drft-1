import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OutOfOrderReasonsComponent } from './components/reservations/codes/out-of-order-reasons/out-of-order-reasons.component';
import { RoomConditionsComponent } from './components/reservations/codes/room-conditions/room-conditions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { HouseKeepingAttendentsComponent } from './components/reservations/codes/house-keeping-attendents/house-keeping-attendents.component';
import { HouseKeepingTasksComponent } from './components/reservations/codes/house-keeping-tasks/house-keeping-tasks.component';
import { ReservationTypesComponent } from './components/reservations/codes/reservation-types/reservation-types.component';
import { DepositRuleComponent } from './components/reservations/codes/deposit-rule/deposit-rule.component';
import { DepositRuleSchedulesComponent } from './components/reservations/codes/deposit-rule-schedules/deposit-rule-schedules.component';
import { DiscountReasonsComponent } from './components/reservations/codes/discount-reasons/discount-reasons.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    OutOfOrderReasonsComponent,
    RoomConditionsComponent,
    HouseKeepingAttendentsComponent,
    HouseKeepingTasksComponent,
    ReservationTypesComponent,
    DepositRuleComponent,
    DepositRuleSchedulesComponent,
    DiscountReasonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
