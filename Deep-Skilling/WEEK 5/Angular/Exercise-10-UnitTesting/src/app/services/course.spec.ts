import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService Unit Tests', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 101, name: 'Angular 20', code: 'CS101', credits: 3, gradeStatus: 'passed' },
    { id: 102, name: 'Data Structures', code: 'CS102', credits: 4, gradeStatus: 'pending' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Step 107: Test getCourses() with HttpTestingController
  it('should fetch all courses via GET request', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108: Test error handling
  it('should handle HTTP error gracefully', () => {
    service.getCourses().subscribe({
      next: () => fail('Should have failed with 500 error'),
      error: (err) => {
        expect(err.message).toContain('Failed to load courses');
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
  });
});
