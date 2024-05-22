// vehicle-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'gasoline-recharge',
                loadComponent: () =>
                    import('./gasoline-recharge/gasoline-recharge.component'),
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component'),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export default class VehicleRoutingModule {}
