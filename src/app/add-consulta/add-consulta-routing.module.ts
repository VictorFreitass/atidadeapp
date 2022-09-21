import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddConsultaPage } from './add-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: AddConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddConsultaPageRoutingModule {}
