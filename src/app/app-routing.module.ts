import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterMedecinComponent } from './register-medecin/register-medecin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }
,{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'register_patient', component: RegisterComponent },
{ path: 'register_medecin', component: RegisterMedecinComponent },
{path: 'acceuil' ,component:DashboardComponent, children : [
{
  path: 'categorie',
  loadChildren: () =>
    import('./modules/categerie/categerie.module').then(
      (m) => m.CategerieModule
    )
  
},
{
  path: 'profil',
  loadChildren: () =>
    import('./modules/user/user.module').then(
      (m) => m.UserModule
    )
  
},
{
  path: 'planning',
  loadChildren: () =>
    import('./modules/planning/planning.module').then(
      (m) => m.PlanningModule
    )
  
},
{
  path: 'dossier',
  loadChildren: () =>
    import('./modules/dossier/dossier.module').then(
      (m) => m.DossierModule
    )
  
}

]

}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
