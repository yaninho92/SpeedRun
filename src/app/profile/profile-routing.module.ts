import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePage,
    children: [
      {
        path: 'profileStat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile_stat/profileStat.module').then(m => m.ProfileStatPagePageModule)
          }
        ]
      },
      {
        path: 'profileCalendar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../exercices/exercices.module').then(m => m.ExercicePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
