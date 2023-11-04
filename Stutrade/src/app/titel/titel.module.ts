import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitelPageRoutingModule } from './titel-routing.module';

import { TitelPage } from './titel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitelPageRoutingModule
  ],
  declarations: [TitelPage]
})
export class TitelPageModule {}
