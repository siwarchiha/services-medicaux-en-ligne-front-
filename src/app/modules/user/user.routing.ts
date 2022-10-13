import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilPatientComponent } from 'src/app/views/user/profil-patient/profil-patient.component';
import { ProfilMedecinComponent } from 'src/app/views/user/profil-medecin/profil-medecin.component';
const routes: Routes = [

    {
      component:ProfilPatientComponent ,
      path: 'profil_patient/:id',
      pathMatch: 'full',
    },
    {
      component:ProfilMedecinComponent ,
      path: 'profil_medecin/:id',
      pathMatch: 'full',
    }
  ];
  
  @NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
  })
  export class UserRoutingModule {}