import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage  {
  nutritionData = [{
    name: '',
    etape:'',
    tempTotal:'',
    tempsPreparation:'',
    tempsCuisson:'',
    description:'',
    image:'',
  }];
  exerciceData = [{
    name: '',
    serie:'',
    tempTotal:'',
    repetition:'',
    repos:'',
    description:'',
    image:'',
  }];
  token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhbmk5MjQ1QGdtYWlsLmNvbSIsIl9pZCI6IjYwN2Q2YzVjMmFkOWI4NGMyYzA4MDMwNSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTkwNTQwMDAsImV4cCI6MTYxOTA4MjgwMH0.P8sqSJDO527TbWz2muLhkqy87Uih1Vb_jlY9I6EDRvaTVAH_BUQzkTxOlZexh5EFkRK8fZVh5aW2dHVbbwfsRIoswROxwpezOgBpXNgIF1ISOpk_HZYIgrCgG-USh6c6lQH_HmcW_4uK5xcXPTz25scBs4lCot4_XKY1qGZwPTQ9cllf8mVx7IG7C-vzUqszmGHp6KTfVZyzXFVP5OEpzYMuvADzwqFXk0GK6BIBhc9NrEvkYLCFp1H8ZMXf0mdqUkCjEGngaaMLEF0nM9OWMmdEbS0RYy-Wqwtg_0jNEPYi04cu9iHg7g_7KE4jWsbE9T6kiAqjaNuKvVi1kalxs_H6cQyBPBACGRFsPRNr-HweZ0RDp2HPCWiOqrkGUTme2alNdRikl70rgHlGStsUdzxY0mM3Apt1F3_SMuLUSU3jfJKYYwj5WIcmA9P2ML4e3nZmTEoFGx6xWL0vLygXO5FxXn2cD4rDTAa5cTLzXDT14ljA-Ci7tYpY06HiDenx4cwtokWTyHySZyqwz2EeD1cBUcaMwcu2CPAjOMm-HIoPvAKD0QaW90ANiPhbaNvA6tm7uGyldMRzbl1O-jjPyfyTjLkbdWswrSDDfClWNkI_wtE7_hfCbO-phAt66mcqj0hz4U8_bAmi7H3wybbwDDi1IUMFxE_YwMJ71FXJOfE";
  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  url:string = 'https://le-roi-mike.herokuapp.com/app/home';
  constructor(private http: HttpClient) {
    this.http.get(this.url,{'headers': this.headers}).subscribe((data)=>{
      console.log(data);
        this.nutritionData = data['recettes'];
        this.exerciceData= data['exercices'];
    })
  }
}