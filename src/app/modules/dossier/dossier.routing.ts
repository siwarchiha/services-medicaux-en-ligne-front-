import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from 'src/app/views/dossier/show/show.component';
import { ListeanalysesComponent } from 'src/app/views/dossier/analyse/listeanalyses/listeanalyses.component';
import { EditanalyseComponent } from 'src/app/views/dossier/analyse/editanalyse/editanalyse.component';
import { ListeantecedentsComponent } from 'src/app/views/dossier/antecedent/listeantecedents/listeantecedents.component';
import { EditantecedentComponent } from 'src/app/views/dossier/antecedent/editantecedent/editantecedent.component';
import { ListeconsultationsComponent } from 'src/app/views/dossier/consultation/listeconsultations/listeconsultations.component';
import { EditconsultationComponent } from 'src/app/views/dossier/consultation/editconsultation/editconsultation.component';

const routes: Routes = [

  {
    component:ShowComponent ,
    path: 'details/:id',
    pathMatch: 'full',
  },
    {
      component:ListeanalysesComponent ,
      path: 'list_analyses/:id',
      pathMatch: 'full',
    }
    ,
    {
      component:EditanalyseComponent ,
      path: 'edit_analyse/:id',
      pathMatch: 'full',
    },
    {
      component:ListeantecedentsComponent ,
      path: 'list_antecedents/:id',
      pathMatch: 'full',
    }
    ,
    {
      component:EditantecedentComponent ,
      path: 'edit_antecedent/:id',
      pathMatch: 'full',
    },
    {
      component:ListeconsultationsComponent ,
      path: 'list_consultations/:id',
      pathMatch: 'full',
    }
    ,
    {
      component:EditconsultationComponent ,
      path: 'edit_consultation/:id',
      pathMatch: 'full',
    }
  ];
  
  @NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
  })
  export class DossierRoutingModule {}
  