import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '@caravancoop/ui-kit/slider';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderComponent],
  templateUrl: './sliders.component.html',
  styleUrls: []
})
export class SlidersComponent {

  constructor(private fb: FormBuilder) {}

  rangeForm = this.fb.group({
    slider: 40,
    range: {
      low: 20,
      high: 450
    },
    disSlider: { value: 230, disabled: true },
    disRange: { value: {low:20, high: 320}, disabled: true },
  })


  optionsOne = {
    min: 0,
    max:500,
    step: 10,
    appearance: 'slider'
  }

  optionsTwo = {
    min: 0,
    max: 100,
    step: 1,
    labels: ['bad', 'so-so', 'ok', 'good', 'great'],
    appearance: 'slider'
  }

  rangeOptions = { min: 0, max: 500, step: 10, appearance: 'range' }

  get range() {
    return this.rangeForm.get('range')?.value;
  }

}
