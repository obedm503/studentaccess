import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Store } from '../../providers/store';

@IonicPage({
  defaultHistory: ['Grades'],
  // same as 'Grades' url to help with deeplinks
  // bug introduced in 3.x https://github.com/ionic-team/ionic-app-scripts/issues/1260
  // added / as workaround
  segment: 'grades/',
})
@Component({
  selector: 'page-grades-detail',
  templateUrl: 'grades-detail.html',
})
export class GradesDetail {
  public class = { class_name: '', class_teacher_id: '', grades: [] };
  public teacher = { teacher_pic: '' };
  public grades: any[] = [];
  public teacherPic = './assets/placeholder.jpg';
  public fabBackground: string;

  constructor(
    public navParams: NavParams,
    public store: Store
  ) { }

  ionViewDidLoad() {
    this.class = this.navParams.get('class');
    this.grades = this.class.grades.slice(0).reverse();
    this.teacher = this.navParams
      .get('teachers')
      .find(el => el.teacher_id === this.class.class_teacher_id);
    this.teacherPic = this.teacher && this.teacher.teacher_pic ? `data:image/jpeg;base64,${this.teacher.teacher_pic}` : this.teacherPic;
  }
}
