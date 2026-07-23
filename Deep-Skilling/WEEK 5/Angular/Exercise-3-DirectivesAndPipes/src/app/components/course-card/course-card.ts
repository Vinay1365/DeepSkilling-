import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number, gradeStatus: string };
  @Input() isEnrolled: boolean = false;
  @Input() highlightColor: string = 'yellow';
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  /*
   * WHY GETTERS KEEP TEMPLATES CLEAN:
   * Using a getter in the component class moves the logical computation out of the HTML template.
   * This keeps the template declarative and highly readable, while making the logic
   * easily testable via unit tests in TypeScript.
   */
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const currentVal = changes['course'].currentValue;
      const prevVal = changes['course'].previousValue;
      console.log('CourseCard OnChanges - Previous:', prevVal, 'Current:', currentVal);
    }
  }
}
