import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  

  barChart: any;
  barChartProfile:any;
  doughnutChart: any;
  lineChart: any;

  constructor() { }

  ngAfterViewInit() {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Km', 'Poids'],
        datasets: [{
          data: [200, 50],
          backgroundColor: [
            'rgba(248, 174, 107)',
            'rgba(107, 85, 248)'
          ],
        }]
      },
    });
  }
}
