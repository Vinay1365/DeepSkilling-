import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.coursesCount = courses.length;
        console.log('HomeComponent initialised — courses loaded via HTTP. Count:', this.coursesCount);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
