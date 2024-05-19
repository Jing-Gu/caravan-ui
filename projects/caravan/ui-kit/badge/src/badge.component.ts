import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'

enum Status {
  Basic = 'basic',
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
  Error = 'error',
  Number = 'number'
}
enum Size {
  Sm = 'small',
  Md = 'medium',
  Lg = 'large',
}
@Component({
  selector: 'car-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
})
export class BadgeComponent implements AfterViewInit{
  @ViewChild('badge') badge: ElementRef = new ElementRef(null)
  @Input() size: string = 'medium' // large | small
  @Input() status: string = 'basic' // basic | info | warning | success | error | number

  badgeClassList: DOMTokenList

  statusClassMap = {
    [Status.Basic]: ['bg-car-neutral-100', 'text-car-neutral-700'],
    [Status.Info]: ['bg-car-primary-100', 'text-car-primary-900'],
    [Status.Warning]: ['bg-car-secondary-100', 'text-car-secondary-900'],
    [Status.Success]: ['bg-car-success-100', 'text-car-success-900'],
    [Status.Error]: ['bg-car-error-100', 'text-car-error-900'],
    [Status.Number]: ['bg-car-error-500',
      'text-car-light',
      'text-sm',
      'h-6',
      'min-w-6',
      'leading-3',
      '!p-2']
  }

  sizeClassMap = {
    [Size.Sm]: ['text-sm', 'py-0', 'px-2'],
    [Size.Md]: ['py-0', 'px-3'],
    [Size.Lg]: ['text-lg', 'py-0', 'px-4'],
  }

  ngAfterViewInit() {
    this.badgeClassList = this.badge?.nativeElement?.classList

    const statusClasses = this.statusClassMap[this.status as Status]
    const sizeClasses = this.sizeClassMap[this.size as Size]

    this.badgeClassList?.add(...statusClasses, ...sizeClasses)
  }

}
