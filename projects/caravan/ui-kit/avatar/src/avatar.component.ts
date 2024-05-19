import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'

enum Size {
  Sm = 'small',
  Md = 'medium',
  Lg = 'large',
  Xl = 'x-large',
  Xxl = 'xx-large'
}
@Component({
  selector: 'car-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit, AfterViewInit {

  @ViewChild('avatar') avatar: ElementRef = new ElementRef(null)
  @ViewChild('initialSpan') initialSpan: ElementRef = new ElementRef(null)
  @Input() size: string = 'medium'
  @Input() name: string | null
  @Input() imgUrl: string | null

  initial: string
  avatarClassList: DOMTokenList
  initialClassList: DOMTokenList

  sizeClassMap = {
    [Size.Sm]: { avatar: ['w-8', 'h-8'], initial: 'text-sm' },
    [Size.Md]: { avatar: ['w-12', 'h-12'], initial: 'text-xl' },
    [Size.Lg]: { avatar: ['w-16', 'h-16'], initial: 'text-4xl' },
    [Size.Xl]: { avatar: ['w-24', 'h-24'], initial: 'text-6xl' },
    [Size.Xxl]: { avatar: ['w-32', 'h-32'], initial: 'text-7xl' },
  }

  ngOnInit() {
    if (this.name) {
      this.getInitial(this.name)
    }
  }

  getInitial(name: string) {
    this.initial = name.charAt(0).toUpperCase()
  }

  ngAfterViewInit() {
    this.avatarClassList = this.avatar?.nativeElement?.classList
    this.initialClassList = this.initialSpan?.nativeElement?.classList

    const sizeClasses = this.sizeClassMap[this.size as Size]

    this.avatarClassList?.add(...sizeClasses.avatar)
    this.initialClassList?.add(sizeClasses.initial)

    if (this.name || this.imgUrl) {
      this.avatarClassList?.add('bg-car-primary-500', 'border-car-primary-500')
    } else {
      this.avatarClassList?.add('bg-car-neutral-100', 'border-car-neutral-100')
    }
  }
}
