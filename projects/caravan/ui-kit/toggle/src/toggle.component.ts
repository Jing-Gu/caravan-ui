import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'car-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {

  @Input() color:string = 'primary'
  @Input() size:string = 'medium'
  @Input() label:string | null
  @Input() isDisabled:boolean = false
  @Input() checked:boolean = false
  @Input() toggleId:string | null
  @Output() checkboxChange = new EventEmitter<boolean>()

  onToggleChange(e: Event) {
    const checked = (e.target as HTMLInputElement).checked
    this.checkboxChange.emit(checked)
  }

}
