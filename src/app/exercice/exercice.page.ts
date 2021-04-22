import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: 'exercice.page.html',
  styleUrls: ['exercice.page.scss']
})
export class ExercicePage {

  exerciceData = [{
    name: '',
    serie:'',
    tempTotal:'',
    repetition:'',
    repos:'',
    description:'',
    image:'',
  }];
  token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhbmk5MjQ1QGdtYWlsLmNvbSIsIl9pZCI6IjYwN2Q2YzVjMmFkOWI4NGMyYzA4MDMwNSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTkwNzg0ODMsImV4cCI6MTYxOTEwNzI4M30.gtqir0vr6K_xnbjgJuROK2xjhtCa8KsZDKGzH04ElH28N2ExpaNNUSaSYKBTEwo4sceVrrVNuMDrhgXNb_TrAflIVrzrNoKeivLw43t6eCbTQWcuMEQ5om7eVZ_80rkZnSowOuE81pCbdvY45z8HwdN3kNs74kS4X2Cr7Ucs4ojetjpi2cB71eiSgwBuiKWctYYOoohXWa4zLoQeGdXLL6VaPDEUZcLZ108m1Iz3msiuKqNo6GT9zGS3xXx3stSawvwiOhhwbsd3dINPSe38gex0iKdEmk1ty72pFxfyaboJoniy6fWpFhvA_TT5oJK1qnNQU0Pu9-S21jbh2rkTmcP_N2h3x2K1hh9cYt6Y7LRM3E-MTeDjsCIWfheKIJ6GVWfLk3wavo5o8NJCgefLLhIILTYhjYDk4nfICa47G0WRkFeWY0be85S_g8fdce-bvWvjIVSJ8VL9zbxYojePJ7R4BUC-UzDviPNSmzs-ZkoXT4rW6VUiFe6d_bGvZGWPL9PKmHvcrA7yMpTWZjj3R2mubRSAkIJ0_nQlBgeQ_hAC-l-_g7HEDNsSOW8-kB1kW_Sk-sxgM6pyloJWwY-Nbw3AtzHlyYxv8ZrW3f1r1iL09NZLcnFSVxTuhR4oImmnLPmO5nNQx22qhaXjRDTC0jyw-jTqv-Td6d7eNXqaouk";
  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  url:string = 'http://localhost:3000/app/exercice';
  constructor(private http : HttpClient) {
    this.http.get(this.url,{'headers': this.headers}).subscribe((data)=>{
      console.log(data);
      this.exerciceData = data['recettes']
      console.log(this.exerciceData);
      
      
    })
  }


}
