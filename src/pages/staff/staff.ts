import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from 'ionic-angular';

import { Store } from '../../providers/store';
import { Log } from '../../providers/log';

import { expand } from '../../components/animations';

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
  animations: [ expand ]
})
export class Staff {
  public staff: any[] = [];
  public filteredStaff: any[] = [];
  public activePerson: string;
  public showSearch: boolean = false;
  public search: string;
  private loading: Loading = this.loadingCtrl.create();

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private store: Store,
    private log: Log,
  ){}

  async ionViewDidLoad(){
    await this.loading.present();
    try {
      let staff = await this.store.get('STAFF');
      this.filteredStaff = this.staff = staff.staff_list;
    } catch(err){
      this.log.warn(err);
    }
    this.loading.dismiss();
  }
  select(item){
    if( this.activePerson === item ){
      this.activePerson = undefined;
    } else {
      this.activePerson = item;
    }
  }

  toggleSearch(){
    this.showSearch = !this.showSearch;
    if( !this.showSearch && this.filteredStaff !== this.staff ){
      this.search = '';
      this.filteredStaff = this.staff;
    }
  }
  doSearch(){
    try {
      let query: string = this.search.toLowerCase().trim();
      this.filteredStaff = this.staff.filter( el =>
        el.calc_name.toLowerCase().indexOf( query ) > -1 ||
        el.calc_status.toLowerCase().indexOf( query ) > -1
      );
    } catch(e){
      this.log.error(e);
    }
  }
}
