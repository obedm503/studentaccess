import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicPageMetadata } from 'ionic-angular';

import { Store } from '../../providers/store';

@IonicPage({
  defaultHistory: ['Grades'],
  segment: 'grades' // same as 'Grades' url to help with deeplinks
})
@Component({
  selector: 'page-grades-detail',
  templateUrl: 'grades-detail.html',
})
export class GradesDetail {
  public class = { class_name: '', class_teacher_id: '', grades: [] };
  public teacher = { teacher_pic: '' };
  public teacherPic = '/assets/placeholder-rec.jpg';

  constructor(
    public nav: NavController,
    public navParams: NavParams,

    public store: Store
  ){}

  ionViewDidLoad(){
    try {
      this.class = this.navParams.get('class');
      this.teacher = this.navParams
        .get('teachers')
        .find( el => el.teacher_id === this.class.class_teacher_id );
      this.teacherPic = this.teacher ? `data:image/jpeg;base64,${this.teacher.teacher_pic}` : this.teacherPic;
    } catch(e){
      console.warn(e);
    }
  }
}
