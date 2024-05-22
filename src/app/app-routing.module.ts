import { NgModule } from '@angular/core';
import { PreloadAllModules, provideRouter, RouterModule, Routes, withPreloading } from '@angular/router';

import { authGuard } from './core/guardians/auth.guard';

import PageNotFoundComponent from './shared/page-not-found/page-not-found.component';
import AdministratorComponent from './shared/administrator/administrador.component';
import LoginComponent from './shared/login/login.component';
import { OnMaintenanceComponent } from './shared/on-maintenance/on-maintenance.component';
import VehicleRoutingModule from './shared/administrator/vehicle/vehicle-routing.module';
import HistoricsRoutingModule from './shared/administrator/historical/historical-routing.module';
import ProfileComponent from './shared/administrator/profile/profile.component';

const routes: Routes = [
    {
        path: 'vehicle',
        component: AdministratorComponent,
        canActivateChild: [authGuard] ,
        canActivate: [authGuard],
        loadChildren: () => VehicleRoutingModule
    },
    {
        path: 'historical',
        component: AdministratorComponent,
        canActivateChild: [authGuard] ,
        canActivate: [authGuard],
        loadChildren: () => HistoricsRoutingModule
    },
    {
        path: 'user',
        component: AdministratorComponent,
        children: [
            {
                path: "profile",
                component: ProfileComponent
            }
        ],
        canActivate: [authGuard]
    },
    {
        path: 'on-maintenance',
        component: OnMaintenanceComponent,
    },
    {
        path: 'not-found',
        component: PageNotFoundComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },

    {
        path: '',
        redirectTo: 'vehicle',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ],
    exports: [RouterModule],
    providers: [
        provideRouter(routes,withPreloading(PreloadAllModules))
    ]
})
export class AppRoutingModule {}
