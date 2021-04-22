import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements AfterViewInit {

  statsData = {
    taille: Number,
    poids: Number,
    imc: Number,
  };
  token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbmlAeWFuaS5mciIsIl9pZCI6IjYwODA5ZmZhZDA3ZDc0MDAxNTViYzdkOCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTkwNzk1MTUsImV4cCI6MTYxOTEwODMxNX0.Ztu6io8M3v4jyt64955w8gizVgiUg0gentjCfnjGRpSAvzblz2EfjqjbH-o8x6blT2nKoE3UcCXIafT2oQi6YvMWq3xmUEzCUKeDMEJT8oQ2cA1x2Kr8qviEzA35ppk9x2ePqJzzdsEM_pgfeI2Fun3N4uoZAemNLnnpFwQtWzLOv9AStjgb6jCT9ujxxtQMQKrtu-XHZSb17HrbdyIQQysBQai-iR9ybSv5q14CyIbm106jhAbntE6xeNTWuF6DFgQa2U_XMvxMYBhzFdIcAZePOyzCXMnalgYyjD141cG-LBaufq-kYu8hzNk2AJsiZ9vxvduukSVz1wDp84tCjhFALNZLlr09jrjLezE8Iz9VPLVKD6rkjB1ZY9W8ejLF86gaM1sLwAg0_yGNrIH88fCXCLxVfoKwxOW98u7qw24GNPpegPpE9Dl4TUMTGpB0K4Hf1KxO7g_zKflVijP_9JBmlBPlUPOZEBX6uAV6D8rM-OE3A1tq_wlyQZYHZNOqUxErA5vSuvc1M9Xuwclewg4Wp5GGujiZ9DxJNyVO7UeKLqi5v5hBXKnyeImKJdUo3hPShiuknR8Y51tYbVg3kZV48tWJpwqhpPgiT4MUMEWQKOAYSBPjpF5q07LYSXfHUnB4qXrFDDSjcCmESH57tw58QjQ9RCdwzhHMFoEoHe8";
  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  url:string = 'http://localhost:3000/app/stat';
  constructor(private http : HttpClient) {
    this.http.get(this.url,{'headers': this.headers}).subscribe((data)=>{
      this.statsData = data['stats'];
      console.log(this.statsData)
    })
  }
  
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  lineChart: any;

  ngAfterViewInit() {
    this.barChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [ 'Poids','Taille','IMC'], 
        datasets: [{
          data: [this.statsData.poids, this.statsData.taille, this.statsData.imc],
          backgroundColor: [
            'rgba(248, 174, 107)',
            'rgba(107, 85, 248)',
            'rgba(248, 174, 107)',
            'rgba(107, 85, 248)',
            'rgba(107, 85, 248)'
          ],
        }]
      },
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: ['Poids'],
            fill: false,
            lineTension: 1,
            backgroundColor: 'rgba(107, 85, 248)',
            borderColor: 'rgba(107, 85, 248)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(107, 85, 248)',
            pointBackgroundColor: 'rgba(107, 85, 248)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(107, 85, 248)',
            pointHoverBorderColor: 'rgba(107, 85, 248)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [this.statsData.poids, 60, 90],
            spanGaps: false,
          },
          {
            label: ['IMC'],
            fill: false,
            lineTension: 1,
            backgroundColor: '#ca46f6',
            borderColor: '#ca46f6',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ca46f6',
            pointBackgroundColor: '#ca46f6',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#ca46f6',
            pointHoverBorderColor: '#ca46f6',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [this.statsData.poids, 23, 35],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
