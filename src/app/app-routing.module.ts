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
    loadChildren: './pages/login/login.module#LoginModule',
  },
  {
    path: 'profile/records',
    loadChildren: './pages/records/records.module#RecordsModule',
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule',
  },
  {
    path: 'homework',
    loadChildren: './pages/homework/homework.module#HomeworkModule',
  },
  {
    path: 'grades/:classId',
    loadChildren:
      './pages/grades-detail/grades-detail.module#GradesDetailModule',
  },
  {
    path: 'grades',
    loadChildren: './pages/grades/grades.module#GradesModule',
  },
  {
    path: 'events',
    loadChildren: './pages/events/events.module#EventsModule',
  },
  {
    path: 'cafeteria',
    loadChildren: './pages/cafeteria/cafeteria.module#CafeteriaModule',
  },
  {
    path: 'staff',
    loadChildren: './pages/staff/staff.module#StaffModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
