import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ShowComponent } from 'src/app/views/dossier/show/show.component';
import { ListeanalysesComponent } from 'src/app/views/dossier/analyse/listeanalyses/listeanalyses.component';
import { EditanalyseComponent } from 'src/app/views/dossier/analyse/editanalyse/editanalyse.component';

import { ListeantecedentsComponent } from 'src/app/views/dossier/antecedent/listeantecedents/listeantecedents.component';
import { EditantecedentComponent } from 'src/app/views/dossier/antecedent/editantecedent/editantecedent.component';
import { ListeconsultationsComponent } from 'src/app/views/dossier/consultation/listeconsultations/listeconsultations.component';
import { EditconsultationComponent } from 'src/app/views/dossier/consultation/editconsultation/editconsultation.component';

import { DossierRoutingModule } from './dossier.routing';



@NgModule({
  declarations: [ShowComponent,
    ListeanalysesComponent,
    EditanalyseComponent,
    ListeantecedentsComponent,
    EditantecedentComponent,
    ListeconsultationsComponent,
    EditconsultationComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    DossierRoutingModule
  ]
})
export class DossierModule { }
