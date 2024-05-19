import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AccordionItemComponent } from '@caravancoop/ui-kit/accordion-item';
import { FeatherIconsModule } from '../../shared/feather-icons/feather-icons.module';
import { ItemComponent } from '@caravancoop/ui-kit/item';
import { DividerComponent } from '@caravancoop/ui-kit/divider';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AccordionItemComponent, FeatherIconsModule, ItemComponent, DividerComponent],
  templateUrl: './accordions.component.html',
  styleUrls: []
})
export class AccordionsComponent {
  title = 'Accordion';
  subtitle = 'To toggle the display of content'
  acctitle = 'How many team members can I invite?'
  content = 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  openIcon = 'plus';
  closeIcon = 'minus';
  id = "1"

  isOpen = false


  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

}
