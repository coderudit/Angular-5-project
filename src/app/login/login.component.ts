import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/user-details';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginUpdateService } from '../services/login-update.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 UserDetails: UserDetails;
 ShowUsernameError: boolean;
 Username = 'admin';
 Password = 'test555#';
 FormValues: any;
 constructor(private router: Router, private loginUpdateService: LoginUpdateService) { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    this.FormValues = JSON.parse(JSON.stringify(form.value));
    if (this.FormValues.txtUsername === this.Username && this.FormValues.txtPassword === this.Password) {
      localStorage.setItem('token', Math.random().toString());
      localStorage.setItem('username', this.Username);
      alert('You have been logged in successfully.');
      this.loginUpdateService.update('hello');
      this.router.navigate(['mobilelist']);
    } else {
      alert('Username/Password does not match.');
      localStorage.clear();
    }
  }
}
