import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  courses: Course[] = [];
  selectedCourseId: number | null = null;
  searchParam: string | null = null;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Read query parameter 'search'
    this.searchParam = this.route.snapshot.queryParamMap.get('search');
    console.log('Query Parameter search:', this.searchParam);

    setTimeout(() => {
      let allCourses = this.courseService.getCourses();
      if (this.searchParam) {
        allCourses = allCourses.filter(c => 
          c.name.toLowerCase().includes(this.searchParam!.toLowerCase()) ||
          c.code.toLowerCase().includes(this.searchParam!.toLowerCase())
        );
      }
      this.courses = allCourses;
      this.isLoading = false;
    }, 800);
  }

  onCardClick(courseId: number): void {
    // Step 70: Navigate to /courses/:id
    this.router.navigate(['courses', courseId]);
  }

  onEnroll(courseId: number): void {
    console.log('Course list onEnroll event emitted for course ID: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
