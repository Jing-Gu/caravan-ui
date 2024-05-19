import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatherIconsModule } from '@caravancoop/ui-kit/shared/featherIcon'
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'car-rating',
  standalone: true,
  imports: [CommonModule, FeatherIconsModule],
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  @Input() rating: number
  @Input() stars = [1,2,3,4,5]
  @Input() ratingIcon: string = 'star'
  @Input() color: string = 'primary'
  @Input() size: string = 'medium'
  @Input() clickable: boolean = true
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>()

  id: string

  ngOnInit(): void {
    this.id = uuidv4()
  }

  onRatingChange(value: number): void {
    this.rating = value
    this.ratingChange.emit(value)
  }
}
