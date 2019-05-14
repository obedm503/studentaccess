import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  IonRefresher,
  LoadingController,
} from '@ionic/angular';
import { AlertInput } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { expand } from '../../components/animations';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  styleUrls: ['profile.scss'],
  animations: [expand],
})
export class Profile {
  schedules: Array<{
    en: string;
    es: string;
    schedule: any[];
    type: string;
  }> = [];
  selectedSchedule = {
    type: '',
    schedule: [],
  };

  missing: any[] = [];
  showMissing: boolean = false;

  birth: string = '';
  studentName: string = '';
  grade: string = '';
  familyCredit: number = 0.0;
  studentCredit: number = 0.0;
  personImage: string = 'assets/placeholder.jpg';

  attendance: any[] = [];
  discipline: any[] = [];

  constructor(
    private alert: AlertController,
    public translate: TranslateService,
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
      const login = (await this.store.get('LOGIN', { refresh })) || {};
      this.birth = (login.birthdate || '').replace(/-/gi, ' ');
      this.studentName = login.person_name;
      this.grade = login.grade;
      this.familyCredit = parseFloat(login.credit_family || '0');
      this.studentCredit = parseFloat(login.credit_student || '0');

      const missing = (await this.store.get('MISSING', { refresh })) || {};
      this.missing = missing.missing || [];

      const schedules = await this.store.get<any[]>('SCHEDULES');
      if (schedules) {
        this.schedules = schedules;
        this.selectedSchedule = schedules[0] || {};
      }

      const img = await this.store.get('IMAGE');
      this.personImage = img
        ? `data:image/jpeg;base64,${img}`
        : 'assets/placeholder.jpg';

      const records = await this.store.get('RECORDS', { refresh });
      if (records) {
        this.attendance = records.attendance;
        this.discipline = records.discipline;
      }
    } catch (err) {
      this.log.error(err);
    }
  }

  async refresh(refresher: IonRefresher) {
    await this.get(true);
    refresher.complete();
  }

  async toggleSchedule() {
    const inputs: AlertInput[] = this.schedules.map(el => ({
      type: 'radio' as 'radio',
      label: el[this.translate.currentLang],
      value: el.type,
      checked: el.type === this.selectedSchedule.type,
    }));

    const alert = await this.alert.create({
      header: this.translate.instant('PROFILE.SELECT_SCHEDULE'),
      buttons: [
        this.translate.instant('GLOBAL.CANCEL'),
        {
          text: this.translate.instant('GLOBAL.OK'),
          handler: type => {
            this.selectedSchedule = this.schedules.find(
              schedule => schedule.type === type,
            );
          },
        },
      ],
      inputs,
    });
    await alert.present();
  }

  toggleMissing() {
    this.showMissing = !this.showMissing;
  }
  goSelected(opts) {
    return this.router.navigate(['profile', 'records'], { queryParams: opts });
  }
  goGrades() {
    return this.router.navigate(['grades']);
  }
}
