import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if(localStorage.getItem('username') != null ){
      this.router.navigate(['/all-books']);
    }
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.http.post('http://ec2-52-15-151-109.us-east-2.compute.amazonaws.com:8000/api/account/login/', { username, password })
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', username);
        location.reload();
        // Navigate to a secured page or perform other actions
        this.router.navigate(['/all-books']);
      }, (error) => {
        console.error('Login failed:', error);
        // Handle login error, show a message, etc.
      });
  }

}
