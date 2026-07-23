import { Injectable } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';

/*
 * SERVICE-TO-SERVICE INJECTION:
 * EnrollmentService injects CourseService directly via constructor.
 * Angular's Dependency Injection system automatically resolves and supplies
 * the singleton instance of CourseService to EnrollmentService.
 */
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [101]; // Default enrollment in course 101

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    const index = this.enrolledCourseIds.indexOf(courseId);
    if (index !== -1) {
      this.enrolledCourseIds.splice(index, 1);
    }
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    const allCourses = this.courseService.getCourses();
    return allCourses.filter(c => this.enrolledCourseIds.includes(c.id));
  }
}
