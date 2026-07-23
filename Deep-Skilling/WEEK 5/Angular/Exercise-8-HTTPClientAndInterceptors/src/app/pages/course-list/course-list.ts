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
  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchParam = this.route.snapshot.queryParamMap.get('search');

    this.courseService.getCourses().subscribe({
      next: (courses) => {
        if (this.searchParam) {
          this.courses = courses.filter(c => 
            c.name.toLowerCase().includes(this.searchParam!.toLowerCase()) ||
            c.code.toLowerCase().includes(this.searchParam!.toLowerCase())
          );
        } else {
          this.courses = courses;
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.message || 'Failed to load courses';
        this.isLoading = false;
      }
    });
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
