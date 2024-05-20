// vehicle-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const childs = [
    {
        path: '',
        redirectTo: 'gasoline-recharge',
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
]

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'gasoline-recharge',
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
