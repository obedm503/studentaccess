import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  Loading,
  LoadingController,
  Refresher,
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Chart } from 'chart.js';
import { Store } from '../../providers/store';
import { Log } from '../../providers/log';
import pattern from 'patternomaly';

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
    private log: Log,
    private translate: TranslateService,
    private loadingCtrl: LoadingController
  ){}

  async ionViewDidEnter(){
    await this.loading.present();
    await this.get();
    this.loading.dismiss();
  }

  async get( refresh = false ){
    try {
      let menu = await this.store.get('MENU');
      this.menu = menu.menu;

      let transactions: { transactions: any[] } = await this.store.get('TRANSACTIONS', undefined, refresh );
      // hard code limit until api is fixed
      this.transactions = transactions.transactions.slice(0).reverse().slice(0, 10);
      this.updateChart(this.transactions);
    } catch( err ){
      this.log.warn(err);
    }
  }

  async refresh( refresher: Refresher ){
    await this.get(true);
    refresher.complete();
  }
  updateChart(transactions: any[]){
    Chart.Line(this.canvas.nativeElement, {
      options: {
        tooltips: { backgroundColor: '#009688' },
        legend: { display: false },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'rgba(0,0,0,0.3)',
              zeroLineColor: 'rgba(0,0,0,0.4)',
              zeroLineWidth: 2
            }
          }],
          yAxes: [{
            gridLines: {
              color: 'rgba(0,0,0,0.3)',
              zeroLineColor: 'rgba(0,0,0,0.4)',
              zeroLineWidth: 2
            }
          }]
        },
        animation: { duration: 0 },
        hover: { animationDuration: 0 },
        responsiveAnimationDuration: 0
      },
      data: {
        labels: transactions.map( el => {
          let date = new Date(el.credhist_datetime);
          return date.toLocaleDateString();
        }),
        datasets: [{
          data: transactions.map( el => el.credhist_balance ),
          backgroundColor: pattern.draw('cross', '#448AFF'),
          borderColor: 'rgba(0,0,0,0.7)',
          pointBackgroundColor: 'black',
          lineTension: 0
        }]
      }
    });
  }

}
