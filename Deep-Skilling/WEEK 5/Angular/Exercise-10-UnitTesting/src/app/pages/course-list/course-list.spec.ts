import { ComponentFixture, TestBed } from '@angular/core';
import { CourseList } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('CourseListComponent NgRx MockStore Tests', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {
    course: {
      courses: [
        { id: 101, name: 'Angular', code: 'CS101', credits: 3, gradeStatus: 'passed' }
      ],
      loading: false,
      error: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
  });

  // Step 109: Test component rendered from mock store state
  it('should render course list from initial NgRx state', () => {
    fixture.detectChanges();
    const cardElement = fixture.debugElement.query(By.css('app-course-card'));
    expect(cardElement).toBeTruthy();
  });

  // Step 110: Test store.setState loading indicator
  it('should display loading indicator when loading state is true', () => {
    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });

    fixture.detectChanges();
    const loadingEl = fixture.debugElement.query(By.css('.loading-spinner'));
    expect(loadingEl).toBeTruthy();
    expect(loadingEl.nativeElement.textContent).toContain('Loading courses');
  });
});
