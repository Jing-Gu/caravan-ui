import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, forwardRef, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { FormService } from '@caravancoop/ui-kit/services/form'
import { Subscription } from 'rxjs'
import { NgxSliderModule } from 'ngx-slider-v2'
import { Options } from 'ngx-slider-v2'

enum Appearance {
  Slider = 'slider',
  Range = 'range'
}
@Component({
  selector: 'car-slider',
  standalone: true,
  imports: [CommonModule, NgxSliderModule],
  templateUrl: './slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor, AfterViewInit, OnInit, OnDestroy {
  @Input() options: { min: number, max: number, step: number, appearance: string }
  @Input() required!: boolean | null
  @Input() isDisabled: boolean | undefined = false

  @ViewChild('carSlider') carSlider!: ElementRef

  sliderOptions: Options
  value: number
  maxValue: number | null

  private onChange: any = () => {}
  private onTouched: any = () => {}
  private resetSliderSubscription: Subscription
  private formService = inject(FormService)

  private ngxSlider: HTMLElement

  ngOnInit() {
     this.sliderOptions = {
      floor: this.options.min,
      ceil: this.options.max,
      step: this.options.step,
      // minRange: this.options.low,
      // maxRange: this.options.high,
      showSelectionBar: true,
      //showTicksValues: true,
      disabled: this.isDisabled
    }
    this.value = this.options.min
    if (this.options.appearance === Appearance.Range) {
      this.maxValue = this.options.max
    } else {
      this.maxValue = null
    }
    this.resetSliderSubscription = this.formService.resetSlider$.subscribe(() => this.resetControl())
  }

  ngAfterViewInit() {
    this.ngxSlider = this.carSlider?.nativeElement?.querySelector('.ngx-slider')
    this.carSlider?.nativeElement?.querySelector('.ngx-slider span:nth-child(3)')?.
      querySelector('.ngx-slider-bar')?.classList.add('!bg-car-neutral-100', 'dark:!bg-car-neutral-700')

    this.ngxSlider?.querySelector('.ngx-slider-selection')?.classList.add('!bg-car-primary-500')

    this.ngxSlider?.querySelector('.ngx-slider-pointer-min')?.classList.add(
      '!bg-car-primary-500', 'after:hidden')
    this.ngxSlider?.querySelector('.ngx-slider-pointer-max')?.classList.add(
      '!bg-car-primary-500', 'after:hidden')

    this.ngxSlider?.querySelectorAll('.ngx-slider-bubble')?.forEach(bubble => {
      bubble.classList.add('!text-car-neutral-900', 'dark:!text-car-neutral-300')
    })

    if (this.isDisabled) {
      this.ngxSlider?.classList.add('opacity-50')
    }
  }

  writeValue(value: number | {low: number, high: number}) {
    if (typeof value === 'object' && 'low' in value && 'high' in value) {
      this.value = value.low
      this.maxValue = value.high
    } else {
      this.value = value
    }
  }

  registerOnChange(onChange: (value: any) => void) {
    this.onChange = onChange
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched
  }


  resetControl(): void {
    this.writeValue(this.value)
  }

  onSliderChange() {
    let val: number | { low: number, high: number }
    if ((this.options.appearance = Appearance.Range) && this.maxValue) {
      val = { low: this.value, high: this.maxValue }
    } else {
      val = this.value
    }
    this.onChange(val)
    this.onTouched()
  }

  ngOnDestroy(): void {
    if (this.resetSliderSubscription) {
      this.resetSliderSubscription.unsubscribe()
    }
  }

}
