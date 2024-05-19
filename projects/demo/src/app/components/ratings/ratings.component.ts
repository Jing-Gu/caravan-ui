import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '@caravancoop/ui-kit/rating';
import { FeatherIconsModule } from '../../shared/feather-icons/feather-icons.module';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [CommonModule, RatingComponent, FeatherIconsModule],
  templateUrl: './ratings.component.html',
  styleUrls: []
})
export class RatingsComponent {

  handleRatingChange(rating: number) {
    console.log('Selected rating:', rating);
  }

}
