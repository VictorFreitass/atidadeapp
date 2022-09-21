import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddConsultaPageRoutingModule } from './add-consulta-routing.module';

import { AddConsultaPage } from './add-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddConsultaPageRoutingModule
  ],
  declarations: [AddConsultaPage]
})
export class AddConsultaPageModule {}
