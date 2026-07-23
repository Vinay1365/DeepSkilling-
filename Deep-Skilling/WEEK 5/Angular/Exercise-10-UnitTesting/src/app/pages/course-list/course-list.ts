import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  selectedCourseId: number | null = null;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    // Step 96: Dispatch NgRx action to load courses
    this.store.dispatch(loadCourses());
  }

  onCardClick(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
