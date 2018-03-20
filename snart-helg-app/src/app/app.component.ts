import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ParadiseModeService } from './core/services/paradisemode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isParadiseMode: Observable<boolean>;

  constructor(private paradiseModeService: ParadiseModeService) { }

  ngOnInit() {
    this.isParadiseMode = this.paradiseModeService.isParadiseMode;
  }
}