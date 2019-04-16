import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'page-grades-detail',
  templateUrl: 'grades-detail.html',
})
export class GradesDetail {
  class = {
    class_name: '',
    class_teacher_id: '',
    grades: [],
    class_avg: '',
    class_description: '',
    class_period: '',
    class_room: '',
    class_scale: '',
    class_updated: '',
  };
  teacher = {
    teacher_pic: '',
    teacher_email: '',
    teacher_name: '',
    teacher_phone: '',
  };
  grades: any[] = [];
  teacherPic = 'assets/placeholder.jpg';
  fabBackground: string;

  constructor(private navParams: NavParams) {}

  ionViewDidEnter() {
    this.class = this.navParams.get('class');
    this.grades = this.class.grades.slice(0).reverse();
    this.teacher = this.navParams
      .get('teachers')
      .find(el => el.teacher_id === this.class.class_teacher_id);
    this.teacherPic =
      this.teacher && this.teacher.teacher_pic
        ? `data:image/jpeg;base64,${this.teacher.teacher_pic}`
        : this.teacherPic;
  }
}
