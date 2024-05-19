import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'

enum Size {
  Sm = 'small',
  Md = 'medium',
  Lg = 'large',
}

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Error = 'error',
  Neutral = 'neutral'
}

enum Appearance {
  Solid = 'solid',
  Outline = 'outline',
  Text = 'text',
  Icon = 'withIcon',
  Fab = 'fab'
}

@Component({
  selector: 'car-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements AfterViewInit {
  @ViewChild('button') btn: ElementRef = new ElementRef(null)

  @Input() buttonType: 'button' | 'submit' = 'button'
  @Input() color: string = 'neutral' // primary | secondary | success | error | neutral
  @Input() size: string = 'medium' // small | large
  @Input() appearance: string = 'solid' // solid | outline | text | withIcon | fab
  @Input() isDisabled!: boolean | undefined
  @Output() click = new EventEmitter()

  colorClassMap = {
    [Color.Neutral]: {
      [Appearance.Solid]: ['bg-car-neutral-500', 'text-car-light', 'enabled:hover:bg-car-neutral-700'],
      [Appearance.Outline]: ['bg-transparent', 'text-car-neutral-500', 'outline', 'outline-2', 'outline-car-neutral-500',
        'enabled:hover:outline-car-neutral-700', 'enabled:hover:text-car-neutral-700'],
      [Appearance.Text]: ['bg-transparent', 'text-car-neutral-500', 'enabled:hover:text-car-neutral-700'],
      [Appearance.Icon]: ['bg-car-neutral-500', 'text-car-light', 'inline-flex', 'items-center', 'gap-4',
        'enabled:hover:bg-car-neutral-700'],
      [Appearance.Fab]: ['bg-car-neutral-500', 'text-car-light', 'enabled:hover:bg-car-neutral-700']
    },
    [Color.Primary]: {
      [Appearance.Solid]: ['bg-car-primary-500', 'text-car-light', 'enabled:hover:bg-car-primary-700'],
      [Appearance.Outline]: ['bg-transparent', 'text-car-primary-500', 'outline', 'outline-2', 'outline-car-primary-500',
        'enabled:hover:outline-car-primary-700', 'enabled:hover:text-car-primary-700'],
      [Appearance.Text]: ['bg-transparent', 'text-car-primary-500', 'enabled:hover:text-car-primary-700'],
      [Appearance.Icon]: ['bg-car-primary-500', 'text-car-light', 'inline-flex', 'items-center', 'gap-4',
        'enabled:hover:bg-car-primary-700'],
      [Appearance.Fab]: ['bg-car-primary-500', 'text-car-light', 'enabled:hover:bg-car-primary-700']
    },
    [Color.Secondary]: {
      [Appearance.Solid]: ['bg-car-secondary-500', 'text-car-light', 'enabled:hover:bg-car-secondary-700'],
      [Appearance.Outline]: ['bg-transparent', 'text-car-secondary-500', 'outline', 'outline-2', 'outline-car-secondary-500',
        'enabled:hover:outline-car-secondary-700', 'enabled:hover:text-car-secondary-700'],
      [Appearance.Text]: ['bg-transparent', 'text-car-secondary-500', 'enabled:hover:text-car-secondary-700'],
      [Appearance.Icon]: ['bg-car-secondary-500', 'text-car-light', 'inline-flex', 'items-center', 'gap-4',
        'enabled:hover:bg-car-secondary-700'],
      [Appearance.Fab]: ['bg-car-secondary-500', 'text-car-light', 'enabled:hover:bg-car-secondary-700']
    },
    [Color.Success]: {
      [Appearance.Solid]: ['bg-car-success-500', 'text-car-light', 'enabled:hover:bg-car-success-700'],
      [Appearance.Outline]: ['bg-transparent', 'text-car-success-500', 'outline', 'outline-2', 'outline-car-success-500',
        'enabled:hover:outline-car-success-700', 'enabled:hover:text-car-success-700'],
      [Appearance.Text]: ['bg-transparent', 'text-car-success-500', 'enabled:hover:text-car-success-700'],
      [Appearance.Icon]: ['bg-car-success-500', 'text-car-light', 'inline-flex', 'items-center', 'gap-4',
        'enabled:hover:bg-car-success-700'],
      [Appearance.Fab]: ['bg-car-success-500', 'text-car-light', 'enabled:hover:bg-car-success-700']
    },
    [Color.Error]: {
      [Appearance.Solid]: ['bg-car-error-500', 'text-car-light', 'enabled:hover:bg-car-error-700'],
      [Appearance.Outline]: ['bg-transparent', 'text-car-error-500', 'outline', 'outline-2', 'outline-car-error-500',
        'enabled:hover:outline-car-error-700', 'enabled:hover:text-car-error-700'],
      [Appearance.Text]: ['bg-transparent', 'text-car-error-500', 'enabled:hover:text-car-error-700'],
      [Appearance.Icon]: ['bg-car-error-500', 'text-car-light', 'inline-flex', 'items-center', 'gap-4',
        'enabled:hover:bg-car-error-700'],
      [Appearance.Fab]: ['bg-car-error-500', 'text-car-light', 'enabled:hover:bg-car-error-700']
    }
  }

  sizeClassMap = {
    [Size.Sm]: ['text-sm','py-2', 'px-3'],
    [Size.Md]: ['test-base', 'py-2', 'px-4'],
    [Size.Lg]: ['text-xl', 'py-3', 'px-6'],
  }

  onClick(): void {
    this.click.emit()
  }

  ngAfterViewInit() {
    const colorClasses = this.colorClassMap[this.color as Color][this.appearance as Appearance]
    const sizeClasses = this.sizeClassMap[this.size as Size]
    const extraClasses = []

    if (this.appearance === Appearance.Fab) {
      extraClasses.push('grid', 'place-content-center', 'w-12', 'h-12', 'shadow-lg')
    }
    this.btn.nativeElement.classList.add(...colorClasses, ...sizeClasses, ...extraClasses)
  }
}
