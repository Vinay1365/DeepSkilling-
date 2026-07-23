import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number };
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const currentVal = changes['course'].currentValue;
      const prevVal = changes['course'].previousValue;
      console.log('CourseCard OnChanges - Previous:', prevVal, 'Current:', currentVal);
    }
  }
}
