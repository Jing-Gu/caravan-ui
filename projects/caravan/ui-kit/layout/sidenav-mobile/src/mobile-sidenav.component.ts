import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'car-mobile-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-sidenav.component.html',
})
export class MobileSidenavComponent {
  @Input() menuIsOpen:boolean = false

}
