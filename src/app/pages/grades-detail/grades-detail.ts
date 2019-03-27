import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'page-grades-detail',
  templateUrl: 'grades-detail.html',
  styleUrls: ['grades-detail.scss'],
})
export class GradesDetail implements OnInit {
  public class = { class_name: '', class_teacher_id: '', grades: [] };
  public teacher = { teacher_pic: '' };
  public grades: any[] = [];
  public teacherPic = 'assets/placeholder.jpg';
  public fabBackground: string;

  constructor(private navParams: NavParams) {}

  ngOnInit() {
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
