import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'car-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() id: string | number | null
  @Input() title: string
  @Input() content: string
  @Input() date: Date | null | undefined
}
