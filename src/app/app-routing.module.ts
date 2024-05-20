import { NgModule } from '@angular/core';
import { PreloadAllModules, provideRouter, RouterModule, Routes, withPreloading } from '@angular/router';

import { authGuard } from './core/guardians/auth.guard';

import PageNotFoundComponent from './shared/page-not-found.component';
import AdministratorComponent from './shared/administrator/administrador.component';
import LoginComponent from './shared/login/login.component';
import { OnMaintenanceComponent } from './shared/on-maintenance/on-maintenance.component';

const routes: Routes = [
    {
        path: 'vehicle',
        // loadChildren: () =>
        //     import('./shared/administrator/vehicle/vehicle-routing.module'),
        component: AdministratorComponent,
        canActivateChild: [authGuard] ,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'gasoline-recharge',
                loadComponent: () => import('./shared/administrator/vehicle/gasoline-recharge/gasoline-recharge.component'),
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./shared/administrator/vehicle/dashboard/dashboard.component'),
            },
        ]

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
