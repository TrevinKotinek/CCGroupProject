import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2:['', Validators.required]
      
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const { username, email, password, password2 } = this.signupForm.value;
    this.http.post('http://localhost:8000/api/account/register/', { username, email, password, password2})
      .subscribe((response: any) => {
        console.log(response)
        this.router.navigate(['/login']);
      }, (error) => {
        console.error('Signup failed:', error);
        // Handle signup error, show a message, etc.
      });
  }

}
