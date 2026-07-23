import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';
import { Course } from '../models/course.model';

/*
 * RxJS OPERATORS EXPLANATIONS:
 * - map: Used to transform data emitted by the Observable (e.g. filtering courses).
 * - tap: Used for side-effects (e.g. logging) without modifying the data stream.
 *        `tap` is preferred for side effects over `map` to keep transformations pure.
 * - retry(2): Automatically retries failed HTTP requests up to 2 times before throwing error.
 * - switchMap: Used to chain Observables, automatically cancelling previous inner Observables if a new request arrives.
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(courses => console.log('Courses loaded from HTTP API:', courses.length)),
      map(courses => courses.filter(c => c.credits > 0)),
      retry(2),
      catchError(err => {
        console.error('CourseService HTTP Error:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError(err => {
        console.error('CourseService getCourseById Error:', err);
        return throwError(() => new Error(`Course with ID ${id} not found.`));
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
