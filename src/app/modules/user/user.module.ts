import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilPatientComponent } from 'src/app/views/user/profil-patient/profil-patient.component';
import { ProfilMedecinComponent } from 'src/app/views/user/profil-medecin/profil-medecin.component';
import { UserRoutingModule } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ProfilPatientComponent,
                 ProfilMedecinComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
