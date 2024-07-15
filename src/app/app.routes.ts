import { Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
    {path:'', component:SidenavComponent,
        children:[
            {path:'', component:ChartsComponent}  
        ]
    }
];
