import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

const authToken = localStorage.getItem('token')
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Token ${authToken}`
  });
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  userId: string | null = null;

  constructor(private http: HttpClient, private router: Router, private ref: ChangeDetectorRef, private _ngZone: NgZone){
    this.ref.markForCheck();
  }

  hasUser():boolean{
    if(this.userId != null)
    {
      return true;
    }
    else if(this.userId === null)
    {
      var currentUser = localStorage.getItem('username')
      this.userId = currentUser
      window.location.reload
      console.log(this.userId)
      console.log(localStorage.getItem('token'))
      if(this.userId === null)
      {
        return false
      }
      else {
        return true
      }
    }
    else{
      return true
    }
    
  }

  ngOnInit(): void { 
  }


  logout():void{
    localStorage.clear();
    this.userId = null  
    const username = this.userId;
    this.router.navigate(['/login']);
    this.http.post('http://ec2-52-15-151-109.us-east-2.compute.amazonaws.com:8000/api/account/logout/', {username}, {headers})
      .subscribe((response: any) => {
      }, (error) => {
        console.error('Logout failed:', error);
        // Handle login error, show a message, etc.
      });
      

  }

}
