import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home' }   
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
