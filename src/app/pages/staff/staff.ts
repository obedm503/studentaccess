import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { isPlatform, SearchbarChangeEventDetail } from '@ionic/core';
import { expand } from '../../components/animations';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

type Person = {
  calc_email?: string;
  calc_homephone?: string;
  calc_name?: string;
  calc_phone?: string;
  calc_status?: string;
  t_id?: string;
};

@Component({
  selector: 'app-page-staff',
  templateUrl: 'staff.html',
  styleUrls: ['staff.scss'],
  animations: [expand],
})
export class StaffComponent {
  isIOS = isPlatform('ios');
  staff: Person[] = [];
  filteredStaff: Person[] = [];
  activePerson?: string;
  showSearch = false;

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
      this.log.warn(err as string);
    }
    await loading.dismiss();
  }
  select(item: string) {
    if (this.activePerson === item) {
      this.activePerson = undefined;
    } else {
      this.activePerson = item;
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch && this.filteredStaff !== this.staff) {
      this.filteredStaff = this.staff;
    }
  }

  doSearch({ detail }: CustomEvent<SearchbarChangeEventDetail>) {
    try {
      const query = detail.value?.toLowerCase().trim();
      if (query) {
        this.filteredStaff = this.staff.filter(
          el =>
            el.calc_name?.toLowerCase().includes(query) ||
            el.calc_status?.toLowerCase().includes(query) ||
            el.calc_email?.toLowerCase().includes(query) ||
            el.calc_homephone?.toLowerCase().includes(query) ||
            el.calc_phone?.toLowerCase().includes(query),
        );
      }
    } catch (e) {
      this.log.error(e as string);
    }
  }
}
