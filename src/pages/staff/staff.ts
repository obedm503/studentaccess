import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store } from '../../providers/store';

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class Staff {
  public staff: any[] = [];
  public filteredStaff: any[] = [];
  public selected;
  public toggled: boolean = false;
  public search;

  constructor(
    public nav: NavController,
    public navParams: NavParams,

    public store: Store
  ){}

  ionViewDidLoad(){
    this.selected = this.navParams.get('selected');
    if( !this.selected ){
      this.store.get('STAFF').then( ( staff = { staff_list: [] } )=> {
        this.filteredStaff = this.staff = staff.staff_list;
      });
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
