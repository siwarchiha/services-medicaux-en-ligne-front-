import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieRoutingModule } from './categorie.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from 'src/app/views/categorie/list/list.component';

import { ListMedecinsComponent } from 'src/app/views/categorie/list-medecins/list-medecins.component';
import { HoraireComponent } from 'src/app/views/horaire/horaire.component';


@NgModule({
  declarations: [ListComponent,
    ListMedecinsComponent,
    HoraireComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FormsModule,

  ]
})
export class CategerieModule { }
