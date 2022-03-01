import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GradeBadgeComponent } from '../../components/grade-badge/grade-badge';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

type Class = {
  class_name: string;
  class_teacher_id: string;
  grades: any[];
  class_avg: string;
  class_description: string;
  class_period: string;
  class_room: string;
  class_scale: string;
  class_updated: string;
};

type Teacher = {
  teacher_id: string;
  teacher_pic: string;
  teacher_email: string;
  teacher_name: string;
  teacher_phone: string;
};

@Component({
  selector: 'app-page-grades-detail',
  templateUrl: 'grades-detail.html',
})
export class GradesDetailComponent {
  class$: Observable<Class> = of({
    class_name: '',
    class_teacher_id: '',
    grades: [],
    class_avg: '',
    class_description: '',
    class_period: '',
    class_room: '',
    class_scale: '',
    class_updated: '',
  });
  teacher$: Observable<Teacher> = of({
    teacher_id: '',
    teacher_pic: '',
    teacher_email: '',
    teacher_name: '',
    teacher_phone: '',
  });
  teacherPic$: Observable<string> = of('assets/placeholder.jpg');
  grades$ = of([] as any[]);

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private loadingCtrl: LoadingController,
    private log: Log,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.get();
    await loading.dismiss();
  }

  async get() {
    try {
      const [cl, t] = await Promise.all([
        this.store.get<{ classes: Class[] }>('ALLGRADES'),
        this.store.get<{ teachers: Teacher[] }>('TEACHERS'),
      ]);
      if (!cl || !t) {
        return;
      }
      const { classes } = cl;
      const { teachers } = t;

      // using observable simply because angular router uses observables for the routeMap
      const data$ = this.route.paramMap.pipe(
        map((params: ParamMap) => {
          const classId = params.get('classId');
          if (!classId) {
            return { teacherPic: 'assets/placeholder.jpg' };
          }

          const [teacherId, room] = classId.split('-');

          const currentClass = classes.find(
            (item) =>
              item.class_room === room && item.class_teacher_id === teacherId,
          );
          const currentTeacher =
            currentClass &&
            teachers.find(
              (el) => el.teacher_id === currentClass.class_teacher_id,
            );
          const teacherPic =
            currentTeacher && currentTeacher.teacher_pic
              ? `data:image/jpeg;base64,${currentTeacher.teacher_pic}`
              : 'assets/placeholder.jpg';

          return { currentClass, currentTeacher, teacherPic };
        }),
      );

      this.class$ = data$.pipe(
        map((data) => data.currentClass as Class),
        filter((item) => !!item),
      );
      this.grades$ = this.class$.pipe(
        map((data) => data.grades.slice(0).reverse()),
      );
      this.teacher$ = data$.pipe(
        map((data) => data.currentTeacher as Teacher),
        filter((item) => !!item),
      );
      this.teacherPic$ = data$.pipe(map((data) => data.teacherPic));
    } catch (err) {
      this.log.error(err as string);
    }
  }

  gradeColor(item: any) {
    const avg = (item.grs_score / item.gra_points) * 100;
    return `${GradeBadgeComponent.color(avg)}-grade`;
  }
}
