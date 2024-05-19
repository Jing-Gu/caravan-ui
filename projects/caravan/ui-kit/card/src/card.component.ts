import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() imgSrc: string
  @Input() subtitle: string | null
  @Input() title: string | null
  @Input() content: string | null
}
