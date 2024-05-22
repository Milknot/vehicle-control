import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path:'',
        redirectTo:'gasoline-recharges',
        pathMatch: 'full'
    },
    {
        path:'gasoline-recharges',
        loadComponent: () => import('./gasoline-recharges/gasoline-recharges.component')
    }
]


@NgModule({
    imports: [ RouterModule.forChild(routes)]
})

export default class HistoricsRoutingModule{}
