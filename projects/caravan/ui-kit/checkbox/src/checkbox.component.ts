import { Component, Input, forwardRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
@Component({
  selector: 'car-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label: string | null
  @Input() carId: string | number
  @Input() name: string
  @Input() value: string | boolean
  @Input() color: string = 'primary'
  @Input() isDisabled: boolean = false

  private onChange: any = () => { }
  private onTouched: any = () => { }

  inputValue: string | boolean



  writeValue(val: string | boolean) {
    this.inputValue =val
  }

  registerOnChange(onChange: () => void) {
    this.onChange = onChange
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched
  }

  onCheckboxChange(event: Event) {
    if (typeof(this.value) === 'string') {
      this.value = (event.target as HTMLInputElement).value
    }
    if (typeof (this.value) === 'boolean') {
      this.value = (event.target as HTMLInputElement).checked
    }
    this.onChange(this.value)
    this.onTouched()
  }

}
