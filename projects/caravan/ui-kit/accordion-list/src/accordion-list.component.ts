import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { AccordionItemComponent } from '@caravancoop/ui-kit/accordion-item'
import { AccordionItem } from '@caravancoop/ui-kit/interface/accordionItem'
import { FeatherIconsModule } from '@caravancoop/ui-kit/shared/featherIcon'
import { ButtonComponent } from '@caravancoop/ui-kit/button'

@Component({
  selector: 'car-accordion-list',
  standalone: true,
  imports: [CommonModule, AccordionItemComponent, FeatherIconsModule, ButtonComponent],
  templateUrl: './accordion-list.component.html',
})
export class AccordionListComponent {
  @Input() qaList: Array<AccordionItem>
  @Input() openIcon: string
  @Input() closeIcon: string
  @Input() showId: boolean = false
  @Input() heading: string

  openAll: boolean = false

  toggleAll() {
    this.openAll = !this.openAll
    this.qaList.forEach((qa) => {
      if (!qa.isDisabled) {
        qa.isOpen = this.openAll
      }
    })
  }

}
