import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'car-gauge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gauge.component.html',
  animations: [
    trigger('gaugeAnimation', [
      state('animate', style({
        strokeDashoffset: '{{ dashOffset }}'
      }), { params: { dashOffset: 0 } }),
      transition('* => animate', [
        style({
          strokeDashoffset: '50%'
        }),
        animate('500ms')
      ]),
      state('*', style({
        strokeDashoffset: '{{ dashOffset }}'
      }), { params: { dashOffset: 0 } })
    ])
  ]
})
export class GaugeComponent implements OnInit{

  @Input() value: number
  @Input() label: string
  @Input() type: string // full | semi
  @Input() size: string
  @Input() color: string

  diameter: number = 140
  circleCx: number
  circleCy: number
  circleR: number
  pathD: string
  strokeWidth: number = 8
  mainTextSize: number = 32
  labelSize: number = 14
  dashOffset: number
  dashArray: number

  ngOnInit(): void {
    this.calculateGauge()
    this.calculateDashOffSet()
  }


  calculateGauge() {
    if (this.size === 'small') {
      this.diameter = 100
      this.strokeWidth = 6
      this.mainTextSize = 24
      this.labelSize = 12
    }
    if (this.size === 'large') {
      this.diameter = 180
      this.strokeWidth = 12
      this.mainTextSize = 42
      this.labelSize = 18
    }
    const radius = this.diameter / 2
    // Update the circle element
    this.circleCx = radius + this.strokeWidth
    this.circleCy = radius + this.strokeWidth
    this.circleR = radius
    // Update the path element for a semi-circle gauge
    this.pathD = `M${this.strokeWidth} ${radius + this.strokeWidth} A${radius} ${radius} 0 0 1 ${this.diameter + this.strokeWidth } ${radius + this.strokeWidth}`
  }

  calculateDashOffSet() {
    let circumference = 0
    if (this.type === 'full') {
      circumference = 2 * Math.PI * this.diameter / 2
    }
    if (this.type === 'semi') {
      circumference = Math.PI * this.diameter / 2
    }
    this.dashArray = circumference
    const progressOffset = circumference * (1 - this.value / 100)
    this.dashOffset = progressOffset
  }
}
