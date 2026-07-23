import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  ngOnInit(): void {
    // Simulate loading available courses count
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  /*
   * DIFFERENCE BETWEEN [property] AND [(ngModel)]:
   * 
   * [property] (Property Binding): One-way data binding from component -> DOM.
   * Any changes made to the component property will update the DOM, but user changes
   * in the DOM will not update the component property.
   * 
   * [(ngModel)] (Two-Way Binding): Two-way data binding from component <-> DOM.
   * Changes in the component property update the DOM, and user interactions in the DOM
   * (like typing in an input field) immediately update the component property.
   */
}
