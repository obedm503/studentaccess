import { Component, ViewChild, OnInit } from '@angular/core';
import { LoadingController, IonRefresher } from '@ionic/angular';

import { Chart } from 'chart.js';
import { Store } from '../../services/store';
import { Log } from '../../services/log';
import pattern from 'patternomaly';

@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class Cafeteria implements OnInit {
  public chart: any;
  @ViewChild('chart') canvas: any;
  public transactions: any[] = [];
  public menu: any[] = [];

  constructor(
    private store: Store,
    private log: Log,
    private loadingCtrl: LoadingController,
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }

  async get(refresh = false) {
    try {
      const menu = await this.store.get('MENU');
      this.menu = menu.menu;

      const transactions: { transactions: any[] } = await this.store.get(
        'TRANSACTIONS',
        undefined,
        refresh,
      );
      // hard code limit until api is fixed
      this.transactions = transactions.transactions
        .slice(0)
        .reverse()
        .slice(0, 10);
      this.updateChart(this.transactions);
    } catch (err) {
      this.log.warn(err);
    }
  }

  async refresh(refresher: IonRefresher) {
    await this.get(true);
    refresher.complete();
  }
  updateChart(transactions: any[]) {
    Chart.Line(this.canvas.nativeElement, {
      options: {
        tooltips: { backgroundColor: '#009688' },
        legend: { display: false },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0,0,0,0.3)',
                zeroLineColor: 'rgba(0,0,0,0.4)',
                zeroLineWidth: 2,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(0,0,0,0.3)',
                zeroLineColor: 'rgba(0,0,0,0.4)',
                zeroLineWidth: 2,
              },
            },
          ],
        },
        animation: { duration: 0 },
        hover: { animationDuration: 0 },
        responsiveAnimationDuration: 0,
      },
      data: {
        labels: transactions.map(el =>
          new Date(el.credhist_datetime).toLocaleDateString(),
        ),
        datasets: [
          {
            data: transactions.map(el => el.credhist_balance),
            backgroundColor: pattern.draw('cross', '#448AFF'),
            borderColor: 'rgba(0,0,0,0.7)',
            pointBackgroundColor: 'black',
            lineTension: 0,
          },
        ],
      },
    });
  }
}
