import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: any = {}
  url = 'http://localhost:3000/app/login'
  constructor(private http :HttpClient) { }
  ngOnInit() {
  }

  submit(){
    this.http.post(this.url, this.user).toPromise().then((data: any) =>{
      console.log(data)
      this.user = data;
      console.log(this.user)
    })
  }
}
