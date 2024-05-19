import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DialogService } from '@caravancoop/ui-kit/services/dialog'
import { ButtonComponent } from '@caravancoop/ui-kit/button'

@Component({
  selector: 'car-dialog',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {

  @Input() title: string
  @Input() content: string
  @Input() buttons: {action: {label: string, value: boolean, color: string}, discard: {label: string, value: boolean}}
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>()

  private dialogService = inject(DialogService)

  onButtonClick(value: any): void {
    this.dialogService.dialogCloseSubjet.next(value)
  }

  initialize(dialogData: any): void {
    this.title = dialogData.title
    this.content = dialogData.content
    this.buttons = dialogData.buttons
  }

}
