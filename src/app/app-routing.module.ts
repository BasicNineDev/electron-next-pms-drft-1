import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutOfOrderReasonsComponent } from './components/reservations/codes/out-of-order-reasons/out-of-order-reasons.component';
import {RoomConditionsComponent} from './components/reservations/codes/room-conditions/room-conditions.component';
import {OutOfOrderReasonsService} from './components/reservations/codes/out-of-order-reasons/out-of-order-reasons.service';

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
