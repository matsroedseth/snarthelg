import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent {
  private _percent='';

  @Input()
  set percentage(percent: string) {
    this._percent = percent;
  }

  get percentage(): string { return this._percent; }
}