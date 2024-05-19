import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core'

enum Position {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

@Directive({
  selector: '[car-tooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input() 'car-tooltip': string = ''
  @Input() 'car-tooltip-position': string = ''

  private tooltip: HTMLElement | null = null
  private el = inject(ElementRef)
  private renderer = inject(Renderer2)

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip()
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip()
  }

  @HostListener('touchstart', ['$event']) onTouchStart(event: Event) {
    event.preventDefault()
    this.showTooltip()
  }

  @HostListener('touchend', ['$event']) onTouchEnd(event: Event) {
    event.preventDefault()
    this.hideTooltip()
  }

  toolTipClasses = ['absolute', 'bg-car-neutral-700', 'text-car-light', 'p-1',
    'rounded-sm', 'text-xs', 'transition', 'duration-300', 'ease-in-out',
    'whitespace-nowrap', 'overflow-auto', 'index-100']

  positionClassMap = {
    [Position.Top]: ['-top-7', 'left-1/2', '-translate-x-1/2'],
    [Position.Bottom]: ['-bottom-7', 'left-1/2', '-translate-x-1/2'],
    [Position.Left]: ['top-1/2', '-translate-y-1/2', 'right-[110%]'],
    [Position.Right]: ['top-1/2', '-translate-y-1/2', 'left-[110%]'],
  }

  private showTooltip() {
    const positionClasses = this.positionClassMap[this['car-tooltip-position'] as Position]
    if (!this.tooltip) {
      this.tooltip = this.renderer.createElement('span')
      this.renderer.appendChild(this.el.nativeElement, this.tooltip)
      this.el.nativeElement.classList.add('relative', 'inline-block')
    }
    if (this.tooltip) {
      this.tooltip.textContent = this['car-tooltip']
      this.tooltip.classList.add(...this.toolTipClasses, ...positionClasses)
    }
  }

  private hideTooltip() {
    if (this.tooltip) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltip)
      this.tooltip = null
    }
  }
}
