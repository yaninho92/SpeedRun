import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'exercice',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../exercice/exercice.module').then(m => m.ExercicePageModule)
          }
        ]
      },
      {
        path: 'coach',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../coach/coach.module').then(m => m.CoachPageModule)
          }
        ]
      },
      {
        path: 'nutrition',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../nutrition/nutrition.module').then(m => m.NutritionPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'stats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../stats/stats.module').then(m => m.StatsPageModule)
          }
        ]
      },
      {
        path: 'exerciceID',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../exerciceID/exerciceID.module').then(m => m.ExerciceIDPageModule)
          }
        ]
      },
      {
        path: 'nutritionID',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../nutritionID/nutritionID.module').then(m => m.NutritionIDPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
