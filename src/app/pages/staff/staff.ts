import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { expand } from '../../components/animations';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
  styleUrls: ['staff.scss'],
  animations: [expand],
})
export class Staff {
  staff: any[] = [];
  filteredStaff: any[] = [];
  activePerson: string;
  showSearch: boolean = false;
  search: string;

  constructor(
    private loadingCtrl: LoadingController,
    private store: Store,
    private log: Log,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    try {
      const staff = await this.store.get('STAFF');
      this.filteredStaff = this.staff = staff.staff_list;
    } catch (err) {
      this.log.warn(err);
    }
    await loading.dismiss();
  }
  select(item) {
    if (this.activePerson === item) {
      this.activePerson = undefined;
    } else {
      this.activePerson = item;
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch && this.filteredStaff !== this.staff) {
      this.search = '';
      this.filteredStaff = this.staff;
    }
  }
  doSearch() {
    try {
      const query: string = this.search.toLowerCase().trim();
      this.filteredStaff = this.staff.filter(
        el =>
          el.calc_name.toLowerCase().indexOf(query) > -1 ||
          el.calc_status.toLowerCase().indexOf(query) > -1,
      );
    } catch (e) {
      this.log.error(e);
    }
  }
}
