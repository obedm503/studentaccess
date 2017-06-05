import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Loading,
  LoadingController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '../../providers/store';
import { expand } from '../../components/animations';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  animations: [ expand ]
})
export class Profile {
  loading: Loading = this.loadingCtrl.create();
  schedules: any[] = [];
  selectedSchedule = {
    type: '',
    schedule: []
  };
  lang: string = this.translate.currentLang;

  missing: any[] = [];
  showMissing: boolean = false;

  birth: string = '';
  studentName: string = '';
  grade: string = '';
  familyCredit: string = '0.00';
  studentCredit: string = '0.00';
  personImage: string = './assets/placeholder.jpg';

  attendance: any[] = [];
  discipline: any[] = [];

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private alert: AlertController,
    private translate: TranslateService,
    private loadingCtrl: LoadingController,
    private store: Store
  ){}
  ionViewCanEnter(){
    return this.store.state.isSet;
  }
  ionViewDidLoad(){
    console.log('present')
    this.loading.present();
    this.store.get('MISSING').then( ( hw = { missing: [] } ) => {
      this.missing = hw.missing;
    });
    this.store.get('LOGIN').then( ( login = { birthdate: ''} ) => {
      this.birth = login.birthdate.replace(/-/ig, ' ');
      this.studentName = login.person_name;
      this.grade = login.grade;
      this.familyCredit = login.credit_family;
      this.studentCredit = login.credit_student;
    });
    this.store.get('SCHEDULES').then( ( schedules = [{}] ) => {
      this.schedules = schedules;
      this.selectedSchedule = schedules[0];
    });
    this.store.get('IMAGE').then( ( img = '' ) => {
      console.log('dismiss');
      this.personImage = img ? `data:image/jpeg;base64,${img}` : './assets/placeholder.jpg';
      this.loading.dismiss();
    });
    this.store.get('RECORDS').then( ( records = { attendance: [], discipline: [] } ) => {
      this.attendance = records.attendance;
      this.discipline = records.discipline;
    });
  }

  toggleSchedule(){
    let inputs = this.schedules.map( el => ({
      type: 'radio',
      label: el[this.lang],
      value: el.type,
      checked: el.type === this.selectedSchedule.type
    }) );

    this.alert.create({
      title: this.translate.instant('PROFILE-select-schedule'),
      buttons: [
        this.translate.instant('CANCEL'),
        {
          text: 'OK',
          handler: type => {
            this.selectedSchedule = this.schedules.find( schedule => schedule.type === type );
          }
        }
      ],
      inputs
    }).present();
  }

  toggleMissing(){
    this.showMissing = !this.showMissing;
  }
  goSelected(opts){
    this.nav.push('Records', opts);
  }
  goGrades(){
    this.nav.setRoot('Grades');
  }

}
