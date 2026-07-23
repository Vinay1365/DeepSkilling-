import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  FormArray, 
  FormControl, 
  Validators, 
  AbstractControl, 
  ValidationErrors 
} from '@angular/forms';

// Custom Synchronous Validator
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '');
  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom Asynchronous Validator
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value || '');
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  /*
   * WHY A TYPED GETTER IS BETTER THAN CASTING IN THE TEMPLATE:
   * 1. Strong Typing & IntelliSense: Using getter `get additionalCourses()` allows TypeScript to infer `FormArray`,
   *    enabling compiler checks on methods like `.controls`, `.push()`, and `.removeAt()`.
   * 2. Clean Templates: Avoids messy inline template type assertion syntax like `($any(enrollForm.get('additionalCourses'))).controls`.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    /*
     * DIFFERENCE BETWEEN enrollForm.value AND enrollForm.getRawValue():
     * - enrollForm.value: Excludes values of controls that are currently DISABLED.
     * - enrollForm.getRawValue(): Includes values of ALL controls, regardless of whether they are enabled or disabled.
     */
    console.log('enrollForm.value (excludes disabled):', this.enrollForm.value);
    console.log('enrollForm.getRawValue() (includes all):', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
