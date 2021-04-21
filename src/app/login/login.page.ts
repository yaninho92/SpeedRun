import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
    console.log(this.responseText);
    }
    });

    xhr.open("GET", "http://storage.googleapis.com/ecole-97299.appspot.com/607bfc53a5275909583242ec_059bebf2-c696-4d1a-a073-52cd4f0b91a6.jpg%22");
    xhr.send();
  }

}
