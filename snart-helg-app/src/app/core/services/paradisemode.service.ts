import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ParadiseModeService {
  private _paradiseMode: Subject<boolean> = new Subject<boolean>();
  isParadiseMode = this._paradiseMode.asObservable();

  setParadiseMode(isParadiseMode: boolean) {
    this._paradiseMode.next(isParadiseMode);
  }
}
