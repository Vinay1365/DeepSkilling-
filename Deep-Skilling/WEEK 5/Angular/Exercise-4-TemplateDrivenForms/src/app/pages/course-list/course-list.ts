import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  
  courses = [
    { id: 101, name: 'Introduction to Angular', code: 'CS-ANG20', credits: 3, gradeStatus: 'passed' },
    { id: 102, name: 'Data Structures & Algorithms', code: 'CS-DSA', credits: 4, gradeStatus: 'failed' },
    { id: 103, name: 'Enterprise Microservices', code: 'CS-MS', credits: 4, gradeStatus: 'pending' },
    { id: 104, name: 'Database Management Systems', code: 'CS-DBMS', credits: 3, gradeStatus: 'passed' },
    { id: 105, name: 'Web Security & Auth', code: 'CS-SEC', credits: 3, gradeStatus: 'pending' }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    // Simulate loading courses with a 1.5s delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  /*
   * WHY trackBy IMPROVES PERFORMANCE:
   * By default, when an array changes, Angular re-renders the entire list in the DOM.
   * By providing a trackBy function, Angular tracks items by their unique identifier (e.g. course.id).
   * This allows Angular to only create or destroy DOM nodes for items that were added or removed,
   * and update nodes for changed items, significantly optimizing DOM manipulation.
   */
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}
