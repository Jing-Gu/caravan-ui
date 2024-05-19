import { CommonModule } from '@angular/common'
import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { FeatherIconsModule } from '@caravancoop/ui-kit/shared/featherIcon'

type Option = {
  id: string,
  value: string,
  label: string
}

@Component({
  selector: 'car-select',
  standalone: true,
  imports: [CommonModule, FeatherIconsModule],
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ]
})
export class SelectComponent implements ControlValueAccessor {
  selectedOption: string = ''
  showOptionsList: boolean = false
  @Input() label: string = ''
  @Input() options: string[] = [] // if options is an array containing a list of strings as values
  @Input() optionLabels: Option[]  = [] // if options is an array containing objects of value, label
  @Input() placeholder: string = ''
  @Input() required!: boolean | null
  @Input() isDisabled!: boolean | null | undefined

  @ViewChild('carSelectElement', { static: true }) carSelectElement: ElementRef

  // Event handlers for the ControlValueAccessor callbacks
  private onChange: any = () => {}
  private onTouched: any = () => {}

  // Receive the value from the form control and set to this.selectedOption
  writeValue(val: string) {
    if (!val) {
      this.selectedOption = this.placeholder ? this.placeholder : '-- select from --'
    } else {
      const correspondingOption = this.optionLabels.find(option => option.value === val)
      this.selectedOption = correspondingOption ? correspondingOption.label : val
    }
  }

  // Register a callback this.onChange to notify the form control when the component's value changes
  registerOnChange(onChange: () => void) {
    this.onChange = onChange
  }

  // Register a callback this.onTouched to notify the form control when the component's value is touched
  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched
  }

  onClickOutside(target: any): void {
    const clickedInside = this.carSelectElement.nativeElement.contains(target)
    if (!clickedInside) {
      this.showOptionsList = false
    }
  }

  toggleOptionsList(): void {
    if (!this.isDisabled) {
      this.showOptionsList = !this.showOptionsList
      this.onTouched()
    }
  }

  selectOption(option: {id: string, value: string, label: string} | string): void {
    this.showOptionsList = false;
    if (typeof option === 'string') {
      this.selectedOption = option
      this.onChange(option) // Notify the form control that the value has changed
    } else {
      this.selectedOption = option.label
      this.onChange(option.value)
    }
    this.onTouched() // Notify the form control that the value has touched
  }
}
