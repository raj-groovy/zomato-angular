import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  loggedDat: any;
  constructor() {
    const loggedData = localStorage.getItem('zomatoUser');
    // debugger;
    if (loggedData != null) {
      const data = JSON.parse(loggedData);
      this.loggedDat = data;
    }
  }

  logoff() {
    localStorage.removeItem('zomatoUser');
    this.loggedDat = undefined;
  }
}
