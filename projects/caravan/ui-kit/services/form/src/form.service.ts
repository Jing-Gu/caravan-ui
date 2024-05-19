import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _resetSlider = new BehaviorSubject<boolean>(false);
  private resetSliderObs = this._resetSlider.asObservable();

  private _resetRange = new BehaviorSubject<boolean>(false);
  private resetRangeObs = this._resetRange.asObservable();

  constructor() { }

  resetSlider() {
    this._resetSlider.next(true);
  }

  get resetSlider$() {
    return this.resetSliderObs;
  }

  resetRange() {
    this._resetRange.next(true);
  }

  get resetRange$() {
    return this.resetRangeObs;
  }
}
