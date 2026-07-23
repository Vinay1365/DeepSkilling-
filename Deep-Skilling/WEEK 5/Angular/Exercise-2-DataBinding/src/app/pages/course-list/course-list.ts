import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses = [
    { id: 101, name: 'Introduction to Angular', code: 'CS-ANG20', credits: 3 },
    { id: 102, name: 'Data Structures & Algorithms', code: 'CS-DSA', credits: 4 },
    { id: 103, name: 'Enterprise Microservices', code: 'CS-MS', credits: 4 },
    { id: 104, name: 'Database Management Systems', code: 'CS-DBMS', credits: 3 },
    { id: 105, name: 'Web Security & Auth', code: 'CS-SEC', credits: 3 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
