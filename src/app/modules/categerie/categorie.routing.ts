import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/app/views/categorie/list/list.component';
import { ListMedecinsComponent } from 'src/app/views/categorie/list-medecins/list-medecins.component';


const routes: Routes = [

  {
    component:ListComponent ,
    path: 'list',
    pathMatch: 'full',
  },
  {
    component:ListMedecinsComponent ,
    path: 'list_medecins/:id',
    pathMatch: 'full',
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CategorieRoutingModule {}
