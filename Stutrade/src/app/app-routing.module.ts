import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [



  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'titel',
    loadChildren: () => import('./titel/titel.module').then( m => m.TitelPageModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./condition/condition.module').then( m => m.ConditionPageModule)
  },
  {
    path: 'uploaded-book',
    loadChildren: () => import('./uploaded-book/uploaded-book.module').then( m => m.UploadedBookPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
