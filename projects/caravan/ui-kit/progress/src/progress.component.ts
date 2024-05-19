import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { trigger, style, animate, transition } from '@angular/animations'


@Component({
  selector: 'car-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  animations: [
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: '0' }),
        animate('{{ duration }}', style({ width: '{{ to }}' }))
      ], { params: { duration: '{{ animationDuration }}', to: '100%' } })
    ])
  ]


})
export class ProgressComponent implements OnInit {
  @Input() color: string = 'primary'
  @Input() size: string = 'medium'
  @Input() value: number
  @Input() showPercentage: boolean

  valueInPercentage: string
  animationDuration: string = '500ms'

  ngOnInit(): void {
    if (this.value && this.value > 0) {
      this.valueInPercentage = this.value + '%'
    } else {
      this.valueInPercentage = '0%'
    }
  }
}
