import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent {
    private chart: AmChart;


    constructor(private AmCharts: AmChartsService) { 
        generateChartData(0);        
    }


    @Input()
    set modus(modusselector: number) {
        generateChartData(1);
    }


    ngAfterViewInit() {

        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "dark",
            "marginRight": 0,
            "dataProvider": chartData,
            "valueAxes": [{
                "axisAlpha": 0.1
            }],

            "graphs": [{
                "balloonText": "[[title]]: [[value]] %",
                "lineThickness": 4,
                "title": "Helgefølelse",
                "valueField": "helgefolelsedata"
            }, {
                "balloonText": "[[title]]: [[value]] %",
                "lineThickness": 4,
                "title": "Kvardagsfølelse",
                "valueField": "dagfolelsedata"
            }],
            "chartCursor": {
                "categoryBalloonDateFormat": "MMM DD JJ:NN",
                "cursorPosition": "middle",
                "enabled": true,
                "selectionAlpha":0,
                "selectWithoutZooming": true,
                "showNextAvailable": true
            },
            "autoMarginOffset": 5,
            "columnWidth": 1,
            "categoryField": "date",
            "categoryAxis": {
                "minPeriod": "hh",
                "parseDates": true
            },
            "export": {
                "enabled": false
            }
        });
        this.chart.path = "/node_modules/amcharts3/amcharts/";
    }
    ngOnDestroy() {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }
}

// generate data
var chartData = [];
var helgeverdi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.0526, 2.1053, 3.1579, 4.2105, 5.2632, 6.3158, 7.3684, 8.4211, 9.4737, 10.526, 11.579, 12.632, 13.684, 14.737, 15.789, 16.842, 17.895, 18.947, 20, 21.053, 22.105, 23.158, 24.211, 25.263, 26.316, 27.368, 28.421, 29.474, 30.526, 31.579, 32.632, 33.684, 34.737, 35.789, 36.842, 37.895, 38.947, 40, 41.053, 42.105, 43.158, 44.211, 45.263, 46.316, 47.368, 48.421, 49.474, 50.526, 51.579, 52.632, 53.684, 54.737, 55.789, 56.842, 57.895, 58.947, 60, 61.053, 62.105, 63.158, 64.211, 65.263, 66.316, 67.368, 68.421, 69.474, 70.526, 71.579, 72.632, 73.684, 74.737, 75.789, 76.842, 77.895, 78.947, 80, 81.053, 82.105, 83.158, 84.211, 85.263, 86.316, 87.368, 88.421, 89.474, 90.526, 91.579, 92.632, 93.684, 94.737, 95.789, 96.842, 97.895, 98.947, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
var helgeverdiparadise = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.0526, 2.1053, 3.1579, 4.2105, 5.2632, 6.3158, 7.3684, 8.4211, 9.4737, 10.526, 11.579, 12.632, 13.684, 14.737, 15.789, 16.842, 17.895, 18.947, 20, 21.053, 22.105, 23.158, 24.211, 25.263, 26.316, 27.368, 28.421, 29.474, 30.526, 31.579, 32.632, 33.684, 34.737, 35.789, 36.842, 37.895, 38.947, 40, 41.053, 42.105, 43.158, 44.211, 45.263, 46.316, 47.368, 48.421, 49.474, 50.526, 51.579, 52.632, 53.684, 54.737, 55.789, 56.842, 57.895, 58.947, 60, 61.053, 62.105, 63.158, 64.211, 65.263, 66.316, 67.368, 68.421, 69.474, 70.526, 71.579, 72.632, 73.684, 74.737, 75.789, 76.842, 77.895, 78.947, 80, 81.053, 82.105, 83.158, 84.211, 85.263, 86.316, 87.368, 88.421, 89.474, 90.526, 91.579, 92.632, 93.684, 94.737, 95.789, 96.842, 97.895, 98.947, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110]
var dagverdi = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 100, 98.947, 97.895, 96.842, 95.789, 94.737, 93.684, 92.632, 91.579, 90.526, 89.474, 88.421, 87.368, 86.316, 85.263, 84.211, 83.158, 82.105, 81.053, 80, 78.947, 77.895, 76.842, 75.789, 74.737, 73.684, 72.632, 71.579, 70.526, 69.474, 68.421, 67.368, 66.316, 65.263, 64.211, 63.158, 62.105, 61.053, 60, 58.947, 57.895, 56.842, 55.789, 54.737, 53.684, 52.632, 51.579, 50.526, 49.474, 48.421, 47.368, 46.316, 45.263, 44.211, 43.158, 42.105, 41.053, 40, 38.947, 37.895, 36.842, 35.789, 34.737, 33.684, 32.632, 31.579, 30.526, 29.474, 28.421, 27.368, 26.316, 25.263, 24.211, 23.158, 22.105, 21.053, 20, 18.947, 17.895, 16.842, 15.789, 14.737, 13.684, 12.632, 11.579, 10.526, 9.4737, 8.4211, 7.3684, 6.3158, 5.2632, 4.2105, 3.1579, 2.1053, 1.0526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dagfyll = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
var dagindex = 0;
var first = true;

function getStartOfWeek(date) {

    // Copy date if provided, or use current date if not
    date = date ? new Date(+date) : new Date();
    date.setHours(0, 0, 0, 0);

    // Set date to previous Sunday
    date.setDate(date.getDate() - date.getDay()+1);

    return date;
}

function generateChartData(modus) {
    if (modus == 1){

        helgeverdi = helgeverdiparadise;
    }
    if (first) {
        var firstDate = getStartOfWeek(new Date());
        var index = 0;
        for (var i = firstDate.getTime(); i < (firstDate.getTime() + 7 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
            var newDate = new Date(i);

            if (newDate.getHours() == 1) {
                var value2 = 100;
                chartData.push({
                    date: newDate,
                    d1: value2,
                    helgefolelsedata: helgeverdi[index],
                    dagfolelsedata: dagverdi[index]
                });
            } else {
                chartData.push({
                    date: newDate,
                    helgefolelsedata: helgeverdi[index],
                    dagfolelsedata: dagverdi[index]
                });
            }
            index += 1;
            first = false;
        }
    }
}

