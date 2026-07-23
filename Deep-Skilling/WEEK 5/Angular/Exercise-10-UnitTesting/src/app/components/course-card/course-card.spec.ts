import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('CourseCardComponent Unit Tests', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  // Step 102: Component creation test
  it('should create CourseCard component', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: @Input rendering test
  it('should display course name in title tag', () => {
    component.course = { 
      id: 101, 
      name: 'Data Structures', 
      code: 'CS101', 
      credits: 4, 
      gradeStatus: 'passed' 
    };
    fixture.detectChanges();

    const titleEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleEl.textContent).toContain('Data Structures');
  });

  // Step 104: @Output event emission test
  it('should emit enrollRequested event with course ID when button clicked', () => {
    component.course = { 
      id: 101, 
      name: 'Data Structures', 
      code: 'CS101', 
      credits: 4, 
      gradeStatus: 'passed' 
    };
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    const button = fixture.debugElement.query(By.css('.enroll-card-btn')).nativeElement;
    button.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(101);
  });

  // Step 105: ngOnChanges test
  it('should call ngOnChanges and log changes', () => {
    spyOn(console, 'log');

    const newCourse = { id: 101, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    component.course = newCourse;
    component.ngOnChanges({
      course: new SimpleChange(null, newCourse, true)
    });

    expect(console.log).toHaveBeenCalledWith('CourseCard OnChanges - Previous:', undefined, 'Current:', newCourse);
  });
});
