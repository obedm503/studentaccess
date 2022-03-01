import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RefresherEventDetail } from '@ionic/core';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class Grades {
  classes: any[] = [];
  avg?: string;
  teachers: any[] = [];

  constructor(
    private loadingCtrl: LoadingController,
    private store: Store,
    private log: Log,
    private router: Router,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }

  async get(refresh = false) {
    try {
      const { overall_avg } = (await this.store.get('SCHEDULE')) || {};
      this.avg = overall_avg;

      const { classes } =
        (await this.store.get('ALLGRADES', { refresh })) || {};
      this.classes = classes;

      const { teachers } = (await this.store.get('TEACHERS')) || {};
      this.teachers = teachers;
    } catch (err) {
      this.log.error(err);
    }
  }

  async refresh({ detail }: CustomEvent<RefresherEventDetail>) {
    await this.get(true);
    detail.complete();
  }

  goSelected(item: any) {
    this.router.navigate([
      'grades',
      `${item.class_teacher_id}-${item.class_room}`,
    ]);
  }
}
