import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadedBookPageRoutingModule } from './uploaded-book-routing.module';

import { UploadedBookPage } from './uploaded-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadedBookPageRoutingModule
  ],
  declarations: [UploadedBookPage]
})
export class UploadedBookPageModule {}
