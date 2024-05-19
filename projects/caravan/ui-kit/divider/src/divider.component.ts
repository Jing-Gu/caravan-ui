import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'car-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider.component.html',
})
export class DividerComponent {
  @Input() color: string = 'neutral' // primary / secondary / success / error
  @Input() spacing: string = 'small' // medium / large
}
