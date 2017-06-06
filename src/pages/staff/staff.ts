import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from 'ionic-angular';

import { Store } from '../../providers/store';
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
  public selected;
  public toggled: boolean = false;
  public search;
  private loading: Loading = this.loadingCtrl.create();

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private store: Store
  ){}

  async ionViewDidLoad(){
    this.selected = this.navParams.get('selected');
    if( !this.selected ){
      await this.loading.present()
      let staff = await this.store.get('STAFF');
      this.filteredStaff = this.staff = staff.staff_list;
      this.loading.dismiss();
    }
  }
  goSelected(item){
    this.nav.push('Staff', {
      selected: item
    });
  }

  toggleSearch(){
    this.toggled = !this.toggled;
    if( !this.toggled && this.filteredStaff !== this.staff ){
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
      console.warn(e);
    }
  }
}
