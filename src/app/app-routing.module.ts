import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrirComponent } from './errir/errir.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: ErrirComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
