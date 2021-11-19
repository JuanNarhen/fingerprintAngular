import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path:'assistant',
    loadChildren: () => import('../../assistant/assistant.module').then(m => m.AssistantModule)
  }
];
