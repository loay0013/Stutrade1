import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'condition',
        loadChildren: () => import('../condition/condition.module').then(m => m.ConditionPageModule)
      },
      {
        path: 'titel',
        loadChildren: () => import('../titel/titel.module').then(m => m.TitelPageModule)
      },
      {
        path: 'uploaded-book',
        loadChildren: () => import('../uploaded-book/uploaded-book.module').then(m => m.UploadedBookPageModule)
      },
      {
        path: 'book',
        loadChildren: () => import('../book/book.module').then(m => m.BookPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
