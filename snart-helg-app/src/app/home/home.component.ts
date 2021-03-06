import { Component, Input } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { Observable } from 'rxjs/Observable';
import { ParadiseModeService } from '../core/services/paradisemode.service';

@Component({
  selector: 'helgechart',
  templateUrl: './home.component.html',
})


export class HomeComponent {
    private _percent;
    private _initialModus: number = 0;
    isParadiseMode: Observable<boolean>;

    constructor(private paradiseModeService: ParadiseModeService) { }
  
    ngOnInit() {
      this.isParadiseMode = this.paradiseModeService.isParadiseMode;
    }

    get percentageNow(): string {
      return ""+getCurrentPercentage()+""; 
    }

    toggleParadiseMode(checked: boolean) {
      this.paradiseModeService.setParadiseMode(checked);
    }
    
}

var helgeverdi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.0526, 2.1053, 3.1579, 4.2105, 5.2632, 6.3158, 7.3684, 8.4211, 9.4737, 10.526, 11.579, 12.632, 13.684, 14.737, 15.789, 16.842, 17.895, 18.947, 20, 21.053, 22.105, 23.158, 24.211, 25.263, 26.316, 27.368, 28.421, 29.474, 30.526, 31.579, 32.632, 33.684, 34.737, 35.789, 36.842, 37.895, 38.947, 40, 41.053, 42.105, 43.158, 44.211, 45.263, 46.316, 47.368, 48.421, 49.474, 50.526, 51.579, 52.632, 53.684, 54.737, 55.789, 56.842, 57.895, 58.947, 60, 61.053, 62.105, 63.158, 64.211, 65.263, 66.316, 67.368, 68.421, 69.474, 70.526, 71.579, 72.632, 73.684, 74.737, 75.789, 76.842, 77.895, 78.947, 80, 81.053, 82.105, 83.158, 84.211, 85.263, 86.316, 87.368, 88.421, 89.474, 90.526, 91.579, 92.632, 93.684, 94.737, 95.789, 96.842, 97.895, 98.947, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]

var date1 = new Date();

function getCurrentPercentage(){
  var hours = getHoursSinceMonday(date1);
  return helgeverdi[hours];
}

function getHoursSinceMonday(d){
  var day=d.getDay();
  if(day==0){day=7};

  return (((day-1)*24)+d.getHours());
}