import {Component} from '@angular/core';
import {Education} from './education';
import {Languages} from './languages';
import {Skills} from './skills';
import {Experience} from './experience';
import {Projects} from '../projects';

/*
import chart.js library and directives.
 */
import 'chart.js/src/chart.js';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'resume',
  template: require('./resume.html'),
  styles: [require('./resume.scss')],
  directives: [Education, Languages, Skills, Experience, Projects, CHART_DIRECTIVES]
})

export class Resume {
  introduction;
  
  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
  constructor() {
  }


  ngOnInit() {
    this.introduction = introduction;
  }

}

var introduction = `
      
  `;


var data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}
/*
 TODO: Replace mock data with RESTful calls.
 TODO: remove languages.
 */
