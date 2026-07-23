import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Input() highlightColor: string = 'yellow';
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  constructor(public enrollmentService: EnrollmentService) {}

  get isEnrolled(): boolean {
    return this.course ? this.enrollmentService.isEnrolled(this.course.id) : false;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderStyle() {
    let color = 'grey';
    if (this.course?.gradeStatus === 'passed') color = 'green';
    else if (this.course?.gradeStatus === 'failed') color = 'red';
    return { 'border-left': `6px solid ${color}` };
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollToggle(): void {
    if (this.isEnrolled) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
    this.enrollRequested.emit(this.course.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const currentVal = changes['course'].currentValue;
      const prevVal = changes['course'].previousValue;
      console.log('CourseCard OnChanges - Previous:', prevVal, 'Current:', currentVal);
    }
  }
}
