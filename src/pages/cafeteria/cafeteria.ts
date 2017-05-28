import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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

  constructor(public store: Store, public translate: TranslateService){}

  ionViewDidLoad(){
    this.store.get('MENU').then( ( menu = { menu: [] } ) => {
      this.menu = menu.menu;
    });
    this.store.get('TRANSACTIONS').then( ({ transactions } = { transactions: [] } ) => {
      this.transactions = transactions;
      this.updateChart(transactions);
    });
  }
  updateChart(transactions: any[]){
    let months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    Chart.Line(this.canvas.nativeElement, {
      data: {
        labels: transactions.map( el => {
          let date = new Date(el.credhist_datetime);
          return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
        }),
        datasets: [{
          label: this.translate.instant('CAFETERIA-balance-history'),
          data: transactions.map( el => el.credhist_balance )
        }]
      }
    });
  }

}
