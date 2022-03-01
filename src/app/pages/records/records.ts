import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Store } from '../../services/store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-page-records',
  templateUrl: 'records.html',
})
export class RecordsComponent {
  title?: string;
  attendance: any[] = [];
  discipline: any[] = [];
  isAttendance?: boolean;

  constructor(
    private store: Store,
    private loadingCtrl: LoadingController,
    router: Router,
  ) {
    router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.urlAfterRedirects),
      )
      .subscribe(route => {
        this.isAttendance = route.includes('attendance');
        this.title = this.isAttendance
          ? 'RECORDS.ATTENDANCE'
          : 'RECORDS.DISCIPLINE';
      });
  }

  async get() {
    const records = await this.store.get('RECORDS');
    if (records) {
      this.attendance = records.attendance;
      this.discipline = records.discipline;
    }
  }

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }
}
