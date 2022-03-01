import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RefresherCustomEvent } from '@ionic/core';
import {
  CategoryScale,
  Chart,
  ChartOptions,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from 'chart.js';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

Chart.register(
  LineController,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
);

const chartOptions: ChartOptions<'line'> = {
  plugins: {
    tooltip: { backgroundColor: '#009688' },
    legend: { display: false },
  },
  scales: {
    x: { grid: { color: 'rgba(0,0,0,0.3)' } },
    y: { grid: { color: 'rgba(0,0,0,0.3)' } },
  },
};

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
      this.transactions = transactions.slice(0).reverse().slice(0, 10);
      this.updateChart(this.transactions);
    } catch (err) {
      this.log.warn(err as string);
    }
  }

  async refresh(e: any) {
    await this.get(true);
    (e as RefresherCustomEvent).target.complete();
  }

  ngAfterViewInit() {
    const ctx = this.canvas?.nativeElement.getContext('2d') || undefined;
    this.chart =
      ctx &&
      new Chart(ctx, {
        type: 'line',
        data: { datasets: [] },
        options: chartOptions,
      });
  }
  updateChart(transactions: any[]) {
    if (!this.chart) {
      return;
    }
    this.chart.data = {
      labels: transactions.map((el) =>
        formatDate(el.credhist_datetime, 'mediumDate', navigator.language),
      ),
      datasets: [
        {
          data: transactions.map((el) => el.credhist_balance),
          borderColor: 'rgba(0,0,0,0.7)',
          pointBackgroundColor: 'black',
        },
      ],
    };
    this.chart.update();
  }
}
