import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  Loading,
  LoadingController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Chart } from 'chart.js';
import { Store } from '../../providers/store';
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
    private translate: TranslateService,
    private loadingCtrl: LoadingController
  ){}

  async ionViewDidEnter(){
    await this.loading.present();
    try {
      let menu = await this.store.get('MENU');
      this.menu = menu.menu;

      let transactions = await this.store.get('TRANSACTIONS');
      // hard code limit until api is fixed
      this.transactions = transactions.transactions.slice(0).reverse().slice(0, 10);
      this.updateChart(this.transactions);
    } catch( err ){
      console.warn(err);
    }
    this.loading.dismiss();
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
