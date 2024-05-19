import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@caravancoop/ui-kit/badge';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './badges.component.html',
  styleUrls: []
})
export class BadgesComponent {

}
