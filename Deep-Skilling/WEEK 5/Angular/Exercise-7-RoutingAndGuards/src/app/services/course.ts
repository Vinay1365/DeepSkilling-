import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

/*
 * SINGLETON SERVICE PATTERN:
 * `providedIn: 'root'` registers this service with the root application injector.
 * This guarantees a SINGLE instance of CourseService is shared across the entire application,
 * making it an ideal central state store for shared course data.
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 101, name: 'Introduction to Angular', code: 'CS-ANG20', credits: 3, gradeStatus: 'passed' },
    { id: 102, name: 'Data Structures & Algorithms', code: 'CS-DSA', credits: 4, gradeStatus: 'failed' },
    { id: 103, name: 'Enterprise Microservices', code: 'CS-MS', credits: 4, gradeStatus: 'pending' },
    { id: 104, name: 'Database Management Systems', code: 'CS-DBMS', credits: 3, gradeStatus: 'passed' },
    { id: 105, name: 'Web Security & Auth', code: 'CS-SEC', credits: 3, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
