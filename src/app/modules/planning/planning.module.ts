import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ShowComponent } from 'src/app/views/planning/show/show.component';
import { PlanningRoutingModule } from './planning.routing';


@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FormsModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
