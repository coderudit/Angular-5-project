import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUpdateService } from './services/login-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  username = localStorage.getItem('username');
  shownavItems = false;
  constructor(private router: Router, private loginUpdateService: LoginUpdateService) {}
  Logout() {
    localStorage.clear();
    this.username = '';
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.loginUpdateService.observer.subscribe((data) => {
      this.username = localStorage.getItem('username');
    });
  }
}
