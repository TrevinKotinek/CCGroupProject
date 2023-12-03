import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

const authToken = localStorage.getItem('token')
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Token ${authToken}`
  });


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener("window:onbeforeunload",["$event"])
    clearLocalStorage(){
        localStorage.clear();
  }
  
  title = 'book-tables';
  userId: string | null = null;

  constructor(private http: HttpClient, private router: Router){}
  
  ngOnInit(): void { 
    this.userId = localStorage.getItem('username')
  }

  logout():void{
    this.userId = null
    localStorage.clear();   
    const username = this.userId;
    this.http.post('http://localhost:8000/api/account/logout/', {username}, {headers})
      .subscribe((response: any) => {
        this.router.navigate(['/login']);
      }, (error) => {
        console.error('Logout failed:', error);
        // Handle login error, show a message, etc.
      });
      

  }
}
