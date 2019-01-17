import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutOfOrderReasonsComponent } from './components/reservations/codes/out-of-order-reasons/out-of-order-reasons.component';
import {RoomConditionsComponent} from './components/reservations/codes/room-conditions/room-conditions.component';
import {OutOfOrderReasonsService} from './components/reservations/codes/out-of-order-reasons/out-of-order-reasons.service';
import {HouseKeepingAttendentsComponent} from './components/reservations/codes/house-keeping-attendents/house-keeping-attendents.component';
import {HouseKeepingTasksComponent} from './components/reservations/codes/house-keeping-tasks/house-keeping-tasks.component';
import {HouseKeepingTasksService} from './components/reservations/codes/house-keeping-tasks/house-keeping-tasks.service';
import {ReservationTypesComponent} from './components/reservations/codes/reservation-types/reservation-types.component';
import {ReservationTypesService} from './components/reservations/codes/reservation-types/reservation-types.service';
import {DepositRuleComponent} from './components/reservations/codes/deposit-rule/deposit-rule.component';
import {DepositRuleService} from './components/reservations/codes/deposit-rule/deposit-rule.service';
import {DepositRuleSchedulesComponent} from './components/reservations/codes/deposit-rule-schedules/deposit-rule-schedules.component';
import {DepositRuleSchedulesService} from './components/reservations/codes/deposit-rule-schedules/deposit-rule-schedules.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'reservation',
        children: [
          {
            path: 'codes',
            children: [
              {
                path: 'out-of-order-reasons',
                component: OutOfOrderReasonsComponent,
                resolve: {
                  outOfOrderReasons: OutOfOrderReasonsService
                }

              },
              {
                path: 'room-conditions',
                component: RoomConditionsComponent
              },
              {
                path: 'housekeeping-attendants',
                component: HouseKeepingAttendentsComponent
              },
              {
                path: 'housekeeping-tasks',
                component: HouseKeepingTasksComponent,
                resolve: {
                  houseKeepingTasks: HouseKeepingTasksService
                }
              },
              {
                path: 'reservation-types',
                component: ReservationTypesComponent,
                resolve: {
                  reservationTypes: ReservationTypesService
                }
              },
              {
                path: 'deposit-rule',
                component: DepositRuleComponent,
                resolve: {
                  depositRule: DepositRuleService
                }
              },
              {
                path: 'deposit-rule-schedules',
                component: DepositRuleSchedulesComponent,
                resolve: {
                  depositRuleSchedules: DepositRuleSchedulesService
                }
              }
            ]
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
