import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitelPage } from './titel.page';

const routes: Routes = [
  {
    path: '',
    component: TitelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitelPageRoutingModule {}
