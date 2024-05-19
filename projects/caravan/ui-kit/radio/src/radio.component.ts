import { Component, Input, forwardRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
@Component({
  selector: 'car-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ]
})
export class RadioComponent implements ControlValueAccessor {
  @Input() label: string
  @Input() carId: string | number
  @Input() name: string
  @Input() value: string
  @Input() color: string = 'primary'
  @Input() isDisabled: boolean = false
  private onChange: any = () => { }
  private onTouched: any = () => { }

  inputValue: string

  writeValue(val: string) {
    this.inputValue = val
  }

  registerOnChange(onChange: () => void) {
    this.onChange = onChange
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched
  }

  onRadioChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value
    this.onChange(this.value)
    this.onTouched()
  }

}
