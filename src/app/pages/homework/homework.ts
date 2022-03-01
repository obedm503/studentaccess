import { Component } from '@angular/core';
import {
  AlertController,
  LoadingController,
  RefresherCustomEvent,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { expand } from '../../components/animations';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

type Hw = {
  calc_class: string;
  calc_date: string;
  pb_lsn_date: string;
  pb_lsn_homework: string;
  pb_lsn_id: string;
  checked: boolean;
};

@Component({
  selector: 'app-page-homework',
  templateUrl: 'homework.html',
  styleUrls: ['homework.scss'],
  animations: [expand],
})
export class HomeworkComponent {
  homework: Hw[] = [];
  classes: any[] = [];
  filteredHw: Hw[] = [];
  selectedClass = 'all-classes';
  hideChecked = true;

  constructor(
    private translate: TranslateService,
    private alert: AlertController,
    private loadingCtrl: LoadingController,
    private log: Log,
    public store: Store,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }

  async get(refresh = false) {
    try {
      const hw = await this.store.get('HOMEWORK', {
        refresh,
        modifier: ({ newData, oldData = { homework: [] } }) => ({
          ...newData,
          homework: newData.homework.map((item: any) => {
            if (
              oldData.homework.find(
                (el: any) => item.lsn_id === el.lsn_id && el.checked,
              )
            ) {
              item.checked = true;
            }
            return item;
          }),
        }),
      });

      // this.homework serves as a backup
      // this.filteredHw is presented in view
      this.filteredHw = this.homework = hw.homework.slice(0).reverse();
    } catch (err) {
      this.log.warn(err as string);
    }
  }

  async popover() {
    this.classes = this.homework
      .filter(
        (el, i, arr) =>
          arr.findIndex((t) => t.calc_class === el.calc_class) === i,
      )
      .map((el) => ({
        type: 'radio',
        label: el.calc_class,
        value: el.calc_class,
      }));

    this.classes.push({
      type: 'radio',
      label: this.translate.instant('HOMEWORK.ALL_CLASSES'),
      value: 'all-classes',
    });

    const alert = await this.alert.create({
      header: this.translate.instant('HOMEWORK.TITLE'),
      buttons: [
        this.translate.instant('GLOBAL.CANCEL'),
        {
          text: this.translate.instant('GLOBAL.OK'),
          handler: (className) => {
            this.selectedClass = className;
            if (className === 'all-classes') {
              this.filteredHw = this.homework;
            } else {
              this.filteredHw = this.homework.filter(
                (hw) => className === hw.calc_class,
              );
            }
          },
        },
      ],
      inputs: this.classes.map((button) => ({
        ...button,
        checked: button.value === this.selectedClass,
      })),
    });

    await alert.present();
  }
  check(item: any) {
    const index = this.homework.findIndex(
      (el) => el.pb_lsn_id === item.pb_lsn_id,
    );
    this.homework[index] = item;
    this.store.persist();
  }

  async refresh(e: any) {
    await this.get(true);
    (e as RefresherCustomEvent).target.complete();
  }
}
