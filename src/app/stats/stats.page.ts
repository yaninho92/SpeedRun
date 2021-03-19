import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  lineChart: any;

  constructor() { }

  ngAfterViewInit() {
    this.barChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Km', 'Poids','Taille', 'ECG','IMC'],
        datasets: [{
          data: [200, 65, 160, 61, 23],
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
            data: [110, 60, 90],
            spanGaps: false,
          },
          {
            label: ['ECG'],
            fill: false,
            lineTension: 1,
            backgroundColor: 'rgba(248, 174, 107)',
            borderColor: 'rgba(248, 174, 107)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(248, 174, 107)',
            pointBackgroundColor: 'rgba(248, 174, 107)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(248, 174, 107)',
            pointHoverBorderColor: 'rgba(248, 174, 107)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [110, 182, 105],
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
            data: [31, 23, 35],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
