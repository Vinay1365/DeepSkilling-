import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

/*
 * COMPONENT-LEVEL PROVIDER:
 * By specifying `providers: [NotificationService]` in the @Component decorator,
 * Angular creates a NEW, dedicated instance of NotificationService scoped exclusively
 * to this component (and its child components).
 * Unlike root singletons, this instance is destroyed when the component is destroyed.
 */
@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class NotificationComponent implements OnInit {
  notifications: string[] = [];
  instanceId!: number;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
    this.instanceId = this.notificationService.instanceId;
    console.log(`NotificationComponent initialized with Scoped NotificationService Instance ID: ${this.instanceId}`);
  }
}
