import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  Loading,
  LoadingController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Chart } from 'chart.js';
import { Store } from '../../providers/store';

@IonicPage()
@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class Cafeteria {
  public chart: any;
  @ViewChild('chart') canvas: any;
  public transactions: any[] = [];
  public menu: any[] = [];
  private loading: Loading = this.loadingCtrl.create();

  constructor(
    private store: Store,
    private translate: TranslateService,
    private loadingCtrl: LoadingController
  ){}

  ionViewDidLoad(){
    this.loading.present();
    this.store.get('MENU').then( ( menu = { menu: [] } ) => {
      this.menu = menu.menu;
    });
    this.store.get('TRANSACTIONS').then( ({ transactions } = { transactions: [] } ) => {
      // hard code limit until api is fixed
      this.transactions = transactions.reverse().slice(0, 10);
      this.updateChart(this.transactions);
      this.loading.dismiss();
    });
  }
  updateChart(transactions: any[]){
    Chart.Line(this.canvas.nativeElement, {
      data: {
        labels: transactions.map( el => {
          let date = new Date(el.credhist_datetime);
          return date.toLocaleDateString();
        }),
        datasets: [{
          label: this.translate.instant('CAFETERIA-balance-history'),
          data: transactions.map( el => el.credhist_balance )
        }]
      }
    });
  }

}
