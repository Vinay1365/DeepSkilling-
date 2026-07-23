import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  public instanceId = Math.floor(Math.random() * 10000);
  private notifications: string[] = ['Welcome to Student Course Portal!'];

  addNotification(msg: string): void {
    this.notifications.push(msg);
  }

  getNotifications(): string[] {
    return this.notifications;
  }
}
