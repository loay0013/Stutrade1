import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadedBookPage } from './uploaded-book.page';

const routes: Routes = [
  {
    path: '',
    component: UploadedBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadedBookPageRoutingModule {}
