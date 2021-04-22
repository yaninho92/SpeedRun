import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any = {}
  url = 'https://grosse-bite-de-noir.herokuapp.com/app/register'
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  submit(){
    this.http.post(this.url, this.user).toPromise().then((data: any) =>{
      this.user = data.json;
    })
  }

}

