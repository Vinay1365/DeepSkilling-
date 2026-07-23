import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | undefined;
  courseId!: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    public enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Read route param :id
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.courseId = Number(idParam);
      this.course = this.courseService.getCourseById(this.courseId);
    }
  }

  toggleEnroll(): void {
    if (this.course) {
      if (this.enrollmentService.isEnrolled(this.course.id)) {
        this.enrollmentService.unenroll(this.course.id);
      } else {
        this.enrollmentService.enroll(this.course.id);
      }
    }
  }
}
