import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile/attendance',
    loadChildren: () =>
      import('./pages/records/records.module').then((m) => m.RecordsModule),
  },
  {
    path: 'profile/discipline',
    loadChildren: () =>
      import('./pages/records/records.module').then((m) => m.RecordsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'homework',
    loadChildren: () =>
      import('./pages/homework/homework.module').then((m) => m.HomeworkModule),
  },
  {
    path: 'grades/:classId',
    loadChildren: () =>
      import('./pages/grades-detail/grades-detail.module').then(
        (m) => m.GradesDetailModule,
      ),
  },
  {
    path: 'grades',
    loadChildren: () =>
      import('./pages/grades/grades.module').then((m) => m.GradesModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'cafeteria',
    loadChildren: () =>
      import('./pages/cafeteria/cafeteria.module').then(
        (m) => m.CafeteriaModule,
      ),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./pages/staff/staff.module').then((m) => m.StaffModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
