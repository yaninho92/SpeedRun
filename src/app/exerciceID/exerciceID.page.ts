import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciceID',
  templateUrl: 'exerciceID.page.html',
  styleUrls: ['exerciceID.page.scss']
})
export class ExerciceIDPage {
  exerciceData = {
    name: '',
    serie:'',
    tempTotal:'',
    repetition:'',
    repos:'',
    description:'',
    image:'',
  };
  token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbmlAeWFuaS5mciIsIl9pZCI6IjYwODA5ZmZhZDA3ZDc0MDAxNTViYzdkOCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTkwNzk1MTUsImV4cCI6MTYxOTEwODMxNX0.Ztu6io8M3v4jyt64955w8gizVgiUg0gentjCfnjGRpSAvzblz2EfjqjbH-o8x6blT2nKoE3UcCXIafT2oQi6YvMWq3xmUEzCUKeDMEJT8oQ2cA1x2Kr8qviEzA35ppk9x2ePqJzzdsEM_pgfeI2Fun3N4uoZAemNLnnpFwQtWzLOv9AStjgb6jCT9ujxxtQMQKrtu-XHZSb17HrbdyIQQysBQai-iR9ybSv5q14CyIbm106jhAbntE6xeNTWuF6DFgQa2U_XMvxMYBhzFdIcAZePOyzCXMnalgYyjD141cG-LBaufq-kYu8hzNk2AJsiZ9vxvduukSVz1wDp84tCjhFALNZLlr09jrjLezE8Iz9VPLVKD6rkjB1ZY9W8ejLF86gaM1sLwAg0_yGNrIH88fCXCLxVfoKwxOW98u7qw24GNPpegPpE9Dl4TUMTGpB0K4Hf1KxO7g_zKflVijP_9JBmlBPlUPOZEBX6uAV6D8rM-OE3A1tq_wlyQZYHZNOqUxErA5vSuvc1M9Xuwclewg4Wp5GGujiZ9DxJNyVO7UeKLqi5v5hBXKnyeImKJdUo3hPShiuknR8Y51tYbVg3kZV48tWJpwqhpPgiT4MUMEWQKOAYSBPjpF5q07LYSXfHUnB4qXrFDDSjcCmESH57tw58QjQ9RCdwzhHMFoEoHe8";
  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  url:string = 'https://le-roi-mike.herokuapp.com/app/exercice';
  constructor(private http : HttpClient) {
    this.http.get(this.url,{'headers': this.headers}).subscribe((data)=>{
      this.exerciceData = data['exercices'][0]
    })
  }
}
