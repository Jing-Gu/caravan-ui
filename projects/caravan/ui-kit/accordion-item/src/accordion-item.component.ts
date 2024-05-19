import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { FeatherIconsModule } from '@caravancoop/ui-kit/shared/featherIcon'

@Component({
  selector: 'car-accordion-item',
  standalone: true,
  imports: [CommonModule, FeatherIconsModule],
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {
  @Input() id: string | null
  @Input() title: string
  @Input() content: string
  @Input() isDisabled: boolean = false
  @Input() isOpen: boolean = false
  @Input() openIcon: string
  @Input() closeIcon: string

  toggleDrawer() {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen
    }
  }

}
