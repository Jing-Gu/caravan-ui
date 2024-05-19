import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'

enum Status {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
  Error = 'error'
}
@Component({
  selector: 'car-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements AfterViewInit{
  @ViewChild('alert') alert: ElementRef = new ElementRef(null)
  @Input() status: string // info | warning | success | error
  @Input() title: string | null
  @Input() content: string

  statusClassMap = {
    [Status.Info]: {
      alert: ['bg-car-primary-100', 'border-l-car-primary-500', 'text-car-primary-500'],
      paragraphs: ['text-car-primary-900'],
    },
    [Status.Warning]: {
      alert: ['bg-car-secondary-100', 'border-l-car-secondary-500', 'text-car-secondary-500'],
      paragraphs: ['text-car-secondary-900'],
    },
    [Status.Success]: {
      alert: ['bg-car-success-100', 'border-l-car-success-500', 'text-car-success-500'],
      paragraphs: ['text-car-success-900'],
    },
    [Status.Error]: {
      alert: ['bg-car-error-100', 'border-l-car-error-500', 'text-car-error-500'],
      paragraphs: ['text-car-error-900'],
    },
  }

  ngAfterViewInit() {
    if (this.statusClassMap[this.status as Status]) {
      const classes = this.statusClassMap[this.status as Status]
      this.alert.nativeElement.classList.add(...classes.alert)
      this.alert.nativeElement.querySelectorAll('p').forEach((p: HTMLElement) => {
        p.classList.add(...classes.paragraphs)
      })
    } else {
      throw Error('The alert status is missing.')
    }
  }
}
