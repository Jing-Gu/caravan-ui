import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'
import { TooltipDirective } from '@caravancoop/ui-kit/shared/directives/tooltip'
import { FeatherIconsModule } from '@caravancoop/ui-kit/shared/featherIcon'

enum Appearance {
  Fill = 'fill',
  Outline = 'outline'
}
@Component({
  selector: 'car-form-field',
  standalone: true,
  imports: [CommonModule, TooltipDirective, FeatherIconsModule],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements AfterViewInit {
  @ViewChild('carFormField') carFormField: ElementRef = new ElementRef(null)

  @Input() required: boolean = false
  @Input() tooltip: string | null
  @Input() appearance: string = 'fill'

  baseInputClasses = ['w-full', 'p-4', 'rounded-md', 'outline-none', 'text-sm',
    'text-car-neutral-900', 'border-solid', 'border-2', 'focus-within:border-car-primary-500',
    'placeholder-car-neutral-300', 'dark:placeholder-car-neutral-700', 'transition',
    'duration-300', 'ease-in-out', 'disabled:cursor-not-allowed', 'disabled:opacity-50',
    'dark:text-car-neutral-100', 'dark:focus-within:border-car-primary-500']

  extraClassMap = {
    [Appearance.Fill]: ['border-transparent', 'bg-car-neutral-50',
      'focus-within:bg-car-light', 'dark:bg-car-neutral-900', 'dark:focus-within:bg-transparent'],
    [Appearance.Outline]: ['border-car-neutral-100',
    'dark:border-car-neutral-700', 'dark:bg-transparent']
  }

  ngAfterViewInit() {
    const inputClasses = this.extraClassMap[this.appearance as Appearance]

    this.carFormField?.nativeElement?.querySelector('input')?.classList?.add(
      ...this.baseInputClasses, ...inputClasses)
    this.carFormField?.nativeElement?.querySelector('textarea')?.classList?.add(
      ...this.baseInputClasses, ...inputClasses)

    this.carFormField?.nativeElement?.querySelector('label').classList.add('inline-block',
      'text-sm', 'mb-1', 'text-car-neutral-500', 'dark:text-car-neutral-300')
  }
}
