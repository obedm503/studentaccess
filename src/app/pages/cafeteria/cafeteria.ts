import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RefresherEventDetail } from '@ionic/core';
import { Chart, ChartOptions } from 'chart.js';
import { draw } from 'patternomaly';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

const chartOptions: ChartOptions = {
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
};
const graphPattern = draw('cross', '#448AFF');

@Component({
  selector: 'app-page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class CafeteriaComponent implements AfterViewInit {
  @ViewChild('chart') canvas?: {
    nativeElement: HTMLCanvasElement;
  };
  transactions: any[] = [];
  menu: any[] = [];
  chart?: Chart;

  constructor(
    private store: Store,
    private log: Log,
    private loadingCtrl: LoadingController, // private date: DatePipe,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }

  async get(refresh = false) {
    try {
      const menu = await this.store.get('MENU');
      this.menu = menu.menu;

      const { transactions } = (await this.store.get<{ transactions: any[] }>(
        'TRANSACTIONS',
        { refresh },
      )) || { transactions: [] };
      // hard code limit until api is fixed
      this.transactions = transactions
        .slice(0)
        .reverse()
        .slice(0, 10);
      this.updateChart(this.transactions);
    } catch (err) {
      this.log.warn(err as string);
    }
  }

  async refresh({ detail }: CustomEvent<RefresherEventDetail>) {
    await this.get(true);
    detail.complete();
  }

  ngAfterViewInit() {
    const ctx = this.canvas?.nativeElement.getContext('2d') || undefined;
    this.chart =
      ctx &&
      new Chart(ctx, {
        type: 'line',
        options: chartOptions,
      });
  }
  updateChart(transactions: any[]) {
    if (!this.chart) {
      return;
    }
    this.chart.data = {
      labels: transactions.map(el =>
        formatDate(el.credhist_datetime, 'mediumDate', navigator.language),
      ),
      datasets: [
        {
          data: transactions.map(el => el.credhist_balance),
          backgroundColor: graphPattern,
          borderColor: 'rgba(0,0,0,0.7)',
          pointBackgroundColor: 'black',
          lineTension: 0,
        },
      ],
    };
    this.chart.update();
  }
}
