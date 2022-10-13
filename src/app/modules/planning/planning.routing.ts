import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowComponent } from 'src/app/views/planning/show/show.component';


const routes: Routes = [

  {
    component:ShowComponent ,
    path: 'show/:id',
    pathMatch: 'full',
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class PlanningRoutingModule {}
