import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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

  constructor(public store: Store){}

  ionViewDidLoad(){
    this.store.get('MENU').then( ( menu = { menu: [] } ) => {
      this.menu = menu.menu;
    });
    this.store.get('TRANSACTIONS').then( ( transactions = { transactions: [] } ) => {
      this.transactions = transactions.transactions.slice(0, 10);
      this.updateChart(this.transactions);
    });
  }
  updateChart(transactions: any[]){
    Chart.Line(this.canvas.nativeElement, {
      data: {
        labels: transactions.map( el => new Date(el.credhist_datetime).toDateString()),
        datasets: [{
          data: transactions.map( el => el.credhist_balance )
        }]
      }
    });
  }

}
