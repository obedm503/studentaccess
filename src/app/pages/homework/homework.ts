import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonRefresher,
  LoadingController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { expand } from '../../components/animations';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
  styleUrls: ['homework.scss'],
  animations: [expand],
})
export class Homework implements OnInit {
  homework: Array<{
    calc_class: string;
    calc_date: string;
    lsn_date: string;
    lsn_hw: string;
    lsn_id: string;
  }> = [];
  classes: any[];
  filteredHw: any[] = [];
  selectedClass: string = 'all-classes';
  hideChecked: boolean = true;

  constructor(
    private translate: TranslateService,
    private alert: AlertController,
    private loadingCtrl: LoadingController,
    private store: Store,
    private log: Log,
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }

  async get(refresh = false) {
    try {
      const hw = await this.store.get(
        'HOMEWORK',
        ({ newData, oldData = { homework: [] } }) => ({
          ...newData,
          homework: newData.homework.map(item => {
            if (
              oldData.homework.find(
                el => item.lsn_id === el.lsn_id && el.checked,
              )
            ) {
              item.checked = true;
            }
            return item;
          }),
        }),
        refresh,
      );
      // this.homework serves as a backup
      // this.filteredHw is presented in view
      this.filteredHw = this.homework = hw.homework.slice(0).reverse();
    } catch (err) {
      this.log.warn(err);
    }
  }

  async popover() {
    this.classes = this.homework
      .filter(
        (el, i, arr) =>
          arr.findIndex(t => t.calc_class === el.calc_class) === i,
      )
      .map(el => ({
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
          handler: className => {
            this.selectedClass = className;
            if (className === 'all-classes') {
              this.filteredHw = this.homework;
            } else {
              this.filteredHw = this.homework.filter(
                hw => className === hw.calc_class,
              );
            }
          },
        },
      ],
      inputs: this.classes.map(button => ({
        ...button,
        checked: button.value === this.selectedClass,
      })),
    });

    await alert.present();
  }
  check(item) {
    const index = this.homework.findIndex(el => el.lsn_id === item.lsn_id);
    this.homework[index] = item;
    this.store.persist();
  }

  async refresh(refresher: IonRefresher) {
    await this.get(true);
    refresher.complete();
  }
}
