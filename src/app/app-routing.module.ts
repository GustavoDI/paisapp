import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        // este es el primer componente que se mostrara cuando entremos a la app
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full' //esto es para que de manera automatica caiga en esta ruta
    },
    {
        path:'region',
        component: PorRegionComponent,
    },
    {
        path:'capital',
        component: PorCapitalComponent
    },
    {
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
       path:'**',
       redirectTo:'' 
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
})
export class AppRoutingModule{

}