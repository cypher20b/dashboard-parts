import { Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoadingSpinnersComponent } from './components/loading-spinners/loading-spinners.component';

export const routes: Routes = [
    {path:'', component:LoadingSpinnersComponent},
    {path:'dashboard', component:CarouselComponent}
];
